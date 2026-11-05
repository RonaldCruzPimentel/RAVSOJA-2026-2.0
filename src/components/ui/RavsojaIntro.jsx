import { useCallback, useEffect, useRef, useState } from "react"
import crest from "../../assets/logos/ravsoja.webp"
import RavsojaGlassReveal from "./RavsojaGlassReveal"
import "./RavsojaIntro.css"

const SESSION_KEY = "ravsoja-intro-seen-v1"
function initialPhase() {
  try { return sessionStorage.getItem(SESSION_KEY) ? "done" : "playing" }
  catch { return "playing" }
}

export default function RavsojaIntro({ children }) {
  const [phase, setPhase] = useState(initialPhase)
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  const skipRef = useRef(null)
  const displayed = useRef(phase !== "done")
  const active = phase !== "done"
  const finish = useCallback(() => setPhase(current => current === "playing" ? "leaving" : current), [])

  useEffect(() => {
    if (!active) return
    try { sessionStorage.setItem(SESSION_KEY, "1") } catch { /* Private storage may be unavailable. */ }
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    skipRef.current?.focus({ preventScroll: true })
    const keys = (event) => {
      if (event.key === "Escape") finish()
      if (event.key === "Tab") { event.preventDefault(); skipRef.current?.focus() }
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const reduce = (event) => { if (event.matches) finish() }
    window.addEventListener("keydown", keys)
    media.addEventListener("change", reduce)
    // Fail-open watchdog, not the normal animation completion mechanism.
    const watchdog = window.setTimeout(finish, 4200)
    const brief = reduced ? window.setTimeout(finish, 180) : null
    return () => {
      clearTimeout(watchdog); clearTimeout(brief)
      window.removeEventListener("keydown", keys)
      media.removeEventListener("change", reduce)
      document.body.style.overflow = overflow
    }
  }, [active, finish, reduced])

  useEffect(() => {
    if (phase !== "leaving") return
    const exit = window.setTimeout(() => {
      setPhase("done")
    }, reduced ? 80 : 360)
    return () => clearTimeout(exit)
  }, [phase, reduced])

  useEffect(() => {
    if (phase !== "done" || !displayed.current) return
    // Only move focus after a displayed intro; returning sessions keep normal focus.
    const main = document.querySelector("[data-rav-intro-content] main")
    if (main) {
      const previous = main.getAttribute("tabindex")
      main.setAttribute("tabindex", "-1")
      main.focus({ preventScroll: true })
      if (previous === null) main.removeAttribute("tabindex")
      else main.setAttribute("tabindex", previous)
      displayed.current = false
    }
  }, [phase])

  // Delay mounting App until exit: the approved Hero's entrance then plays as it is revealed.
  return <>
    {phase !== "playing" && <div data-rav-intro-content inert={active || undefined}>{children}</div>}
    {active && <div className={`rav-intro${phase === "leaving" ? " rav-intro--leaving" : ""}`} role="dialog" aria-modal="true" aria-label="Bienvenida a RAVSOJA">
      <div className="rav-intro__center">
        {reduced ? <div className="rav-intro__glass"><img className="rav-intro__fallback" src={crest} alt="Escudo oficial de RAVSOJA" onError={finish} /></div> : <RavsojaGlassReveal logo={crest} onComplete={finish} />}
        <div className="rav-intro__caption"><p>CONSORCIO EDUCATIVO RAVSOJA</p><span>DONDE TÚ PERTENECES</span></div>
      </div>
      <button ref={skipRef} type="button" className="rav-intro__skip" onClick={finish}>Omitir introducción <span aria-hidden="true">↗</span></button>
    </div>}
  </>
}
