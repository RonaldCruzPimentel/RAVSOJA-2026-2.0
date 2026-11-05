import { useState } from "react"
import { Pause, Play } from "lucide-react"
import { convenios } from "../data/convenios"
import "./Convenios.css"

export default function Convenios() {
  const [paused, setPaused] = useState(false)
  return (
    <section className="hero-convenios" id="convenios" aria-labelledby="hero-convenios-title">
      <div className="hero-convenios__heading">
        <h2 id="hero-convenios-title">CONVENIOS Y ALIANZAS INSTITUCIONALES</h2>
        <button className="hero-convenios__pause" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Reanudar movimiento de convenios" : "Pausar movimiento de convenios"}>
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        </button>
      </div>
      <div className="hero-convenios__viewport" tabIndex={0} role="region" aria-label="Convenios institucionales" data-paused={paused}>
        <div className="hero-convenios__track" style={{ "--convenios-duration": `${convenios.length * 16 / 3}s` }}>
          {[false, true].map(duplicate => (
            <ul className="hero-convenios__list" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {convenios.map((convenio) => (
                <li className="hero-convenios__item" key={convenio.nombre} title={convenio.nombre}>
                  <img src={convenio.imagen} alt={duplicate ? "" : convenio.nombre} decoding="async" draggable="false" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
