import { ArrowRight, MessageCircle } from "lucide-react"
import RotatingInstitution from "./RotatingInstitution"
import { HERO_WHATSAPP_URL } from "./heroData"

export default function HeroSkillPreview() {
  return (
    <main className="preview-skill" id="inicio">
      <div className="preview-skill__frame" aria-hidden="true" />
      <div className="preview-skill__container">
        <section className="preview-skill__copy" aria-labelledby="skill-title">
          <p className="preview-skill__eyebrow">Cuatro instituciones, un consorcio educativo</p>
          <h1 id="skill-title">
            <span className="sr-only">Tu siguiente paso comienza en una de nuestras cuatro instituciones.</span>
            <span aria-hidden="true">Tu siguiente paso comienza en</span>
          </h1>
          <RotatingInstitution className="preview-skill__mobile-rotator" />
          <p className="preview-skill__description">Encuentra formación en salud, bienestar, derecho y liderazgo, con orientación para elegir con seguridad.</p>
          <div className="preview-skill__actions">
            <a className="preview-button preview-button--primary" href={import.meta.env.BASE_URL + "oferta-educativa.html"}>Ver catálogo <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} /></a>
            <a className="preview-button preview-button--ghost" href={HERO_WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} /> Hablar con un asesor</a>
          </div>
        </section>

        <aside className="preview-skill__institution" aria-hidden="true">
          <span className="preview-skill__index">01 - 04</span>
          <RotatingInstitution className="preview-skill__rotator" />
          <div className="preview-skill__crest"><img src={import.meta.env.BASE_URL + "logo-512.webp"} alt="" /></div>
          <span className="preview-skill__caption">Consorcio Educativo RAVSOJA</span>
        </aside>
      </div>
    </main>
  )
}
