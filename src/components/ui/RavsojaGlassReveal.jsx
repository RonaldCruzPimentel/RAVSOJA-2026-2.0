import { useEffect, useRef, useState } from "react"

// One engine and one playback per mount. The completion follows the spring timeline.
export default function RavsojaGlassReveal({ logo, onComplete }) {
  const hostRef = useRef(null)
  const fallbackTimer = useRef(0)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    let cancelled = false, raf = 0, renderer, canvas, resize, completionTimer
    let completed = false
    const complete = () => {
      if (cancelled || completed) return
      completed = true
      onComplete?.()
    }
    const dispose = () => {
      cancelAnimationFrame(raf)
      clearTimeout(completionTimer)
      resize?.disconnect()
      canvas?.removeEventListener("webglcontextlost", contextLost)
      if (renderer) renderer.dispose()
      else canvas?.getContext("webgl2")?.getExtension("WEBGL_lose_context")?.loseContext()
      renderer = null
      canvas?.remove()
    }
    const fail = () => {
      if (cancelled) return
      dispose()
      setFallback(true)
    }
    const contextLost = (event) => { event.preventDefault(); fail() }

    async function start() {
      try {
        const { LIGHT, loadLogo, createRenderer, frameAt, endOf } = await import("./ravsoja-glass-engine")
        if (cancelled) return
        const data = await loadLogo(logo)
        if (cancelled) return
        canvas = document.createElement("canvas")
        canvas.setAttribute("aria-hidden", "true")
        host.appendChild(canvas)
        renderer = createRenderer(canvas)
        if (!renderer) { fail(); return }
        canvas.addEventListener("webglcontextlost", contextLost)
        renderer.setLogo(data)
        const settings = {
          ...LIGHT, background: "#F8FAFD", originalColors: true,
          logoScale: .92, finalScale: 1, startZoom: 1.8,
          present: 1.35, glide: 1.05, bounce: 0, response: .42,
          sheen: .65, dispersion: 1.1, colorBleed: .65,
          iconPlate: false, keepPlate: false,
        }
        const end = endOf(settings)
        let started, width = 1, height = 1, tile = 1
        const measure = () => {
          if (cancelled || !host.isConnected) return
          const rect = host.getBoundingClientRect()
          const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
          width = Math.max(1, Math.round(rect.width * dpr))
          height = Math.max(1, Math.round(rect.height * dpr))
          canvas.width = width; canvas.height = height
          tile = Math.min(280, Math.min(rect.width, rect.height) / 1.35) * dpr
        }
        measure()
        resize = new ResizeObserver(measure)
        resize.observe(host)
        const tick = (now) => {
          if (cancelled || !renderer) return
          started ??= now
          const time = Math.min((now - started) / 1000, end)
          try { renderer.render(frameAt(time, settings), width, height, tile) }
          catch { fail(); return }
          if (time < end) raf = requestAnimationFrame(tick)
          else completionTimer = window.setTimeout(complete, 180)
        }
        raf = requestAnimationFrame(tick)
      } catch { fail() }
    }
    start()
    return () => { cancelled = true; clearTimeout(fallbackTimer.current); dispose() }
  }, [logo, onComplete])

  return <div ref={hostRef} className="rav-intro__glass" role="img" aria-label="Escudo oficial del Consorcio Educativo RAVSOJA" data-renderer={fallback ? "image" : "webgl"}>
    {fallback && <img className="rav-intro__fallback" src={logo} alt="" onLoad={() => { clearTimeout(fallbackTimer.current); fallbackTimer.current = window.setTimeout(onComplete, 850) }} onError={onComplete} />}
  </div>
}
