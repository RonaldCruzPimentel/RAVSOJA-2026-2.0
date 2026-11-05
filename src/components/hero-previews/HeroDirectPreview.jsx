import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "../ui/button"
import RotatingInstitution from "./RotatingInstitution"
import { HERO_WHATSAPP_URL } from "./heroData"

export default function HeroDirectPreview() {
  return (
    <main className="preview-direct" id="inicio">
      <div className="preview-direct__container">
        <div className="preview-direct__badge">Consorcio Educativo RAVSOJA <ArrowRight aria-hidden="true" size={16} /></div>
        <div className="preview-direct__message">
          <h1>
            <span className="sr-only">Tu siguiente paso comienza en una de nuestras cuatro instituciones.</span>
            <span aria-hidden="true">Tu siguiente paso comienza en</span>
            <RotatingInstitution className="preview-direct__rotator" />
          </h1>
          <p>Encuentra formación en salud, bienestar, derecho y liderazgo, con orientación para elegir con seguridad.</p>
        </div>
        <div className="preview-direct__actions">
          <Button asChild size="lg" variant="outline" className="preview-direct__button preview-direct__button--outline">
            <a href={HERO_WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Hablar con un asesor</a>
          </Button>
          <Button asChild size="lg" className="preview-direct__button preview-direct__button--primary">
            <a href="/oferta-educativa.html">Ver catálogo <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </main>
  )
}
