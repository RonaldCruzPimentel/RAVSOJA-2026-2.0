import { useEffect, useRef, useState } from "react"
import { Pause, Play, RotateCcw } from "lucide-react"

export default function HeroMedia() {
  const player = useRef(null)
  const playback = useRef({ visible: false, manual: false, paused: false })
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = player.current
    const state = playback.current
    const reduced = matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => {
      const allowAuto = !reduced.matches && !navigator.connection?.saveData
      if (!state.visible || document.hidden || state.paused || (!state.manual && !allowAuto)) {
        video.pause()
      } else {
        video.play().catch(() => { /* Autoplay may require an explicit gesture. */ })
      }
    }
    const preferenceChanged = () => { state.manual = false; sync() }
    const observer = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting
      sync()
    }, { threshold: 0.15 })
    observer.observe(video)
    document.addEventListener("visibilitychange", sync)
    reduced.addEventListener("change", preferenceChanged)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", sync)
      reduced.removeEventListener("change", preferenceChanged)
      video.pause()
    }
  }, [])

  function play() {
    playback.current.manual = true
    playback.current.paused = false
    player.current.play().catch(() => { /* The poster and play control remain available. */ })
  }
  function toggle() {
    if (player.current.paused) play()
    else { playback.current.paused = true; player.current.pause() }
  }
  function retry() {
    setFailed(false)
    player.current.load()
    play()
  }

  return <div className="rav-hero__media">
    <div className="rav-hero__footage">
      <video ref={player} className="hero-video" muted loop playsInline preload="none"
        poster={import.meta.env.BASE_URL + "media/phase1/hero-graduacion.webp"} src={import.meta.env.BASE_URL + "media/phase1/graduacion-hero.mp4"}
        aria-label="Ceremonia de graduación de RAVSOJA" aria-describedby="hero-video-description"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} />
    </div>
    <p id="hero-video-description" className="hero-sr-only">Video sin audio de una ceremonia con graduados y representantes de RAVSOJA.</p>
    {!failed && <button className="hero-video-control" type="button" onClick={toggle} aria-label={playing ? "Pausar video" : "Reproducir video"}>
      {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" fill="currentColor" />}
    </button>}
    {failed && <div className="hero-video-error" role="alert"><p>No se pudo reproducir el video.</p><button type="button" onClick={retry}><RotateCcw size={16} aria-hidden="true" />Volver a intentar</button></div>}
  </div>
}
