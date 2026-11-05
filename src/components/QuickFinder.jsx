import { ArrowRight, Search } from "lucide-react"
import "./ConversionSections.css"

export default function QuickFinder() {
  return (
    <section className="quick-finder" aria-labelledby="quick-finder-title">
      <div className="quick-finder__container">
        <div className="quick-finder__heading">
          <Search aria-hidden="true" size={24} strokeWidth={1.7} />
          <div>
            <h2 id="quick-finder-title">Encuentra un programa para ti</h2>
            <p>Filtra la oferta de CUETMX según tu interés y modalidad preferida.</p>
          </div>
        </div>

        <form className="quick-finder__form" action={import.meta.env.BASE_URL + "oferta-educativa.html"} method="get">
          <label>
            <span>Área de interés</span>
            <select name="area" defaultValue="">
              <option value="">Todas las áreas</option>
              <option value="Ciencias de la Salud">Ciencias de la Salud</option>
              <option value="Estética y Cosmiatría">Estética y Cosmiatría</option>
              <option value="Terapias Complementarias">Terapias Complementarias</option>
              <option value="Desarrollo Humano">Desarrollo Humano</option>
            </select>
          </label>

          <label>
            <span>Modalidad</span>
            <select name="modalidad" defaultValue="">
              <option value="">Todas las modalidades</option>
              <option value="En línea">En línea</option>
              <option value="Presencial">Presencial</option>
              <option value="Híbrido">Híbrido</option>
            </select>
          </label>

          <button type="submit">
            Encontrar programas
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
        </form>
      </div>
    </section>
  )
}
