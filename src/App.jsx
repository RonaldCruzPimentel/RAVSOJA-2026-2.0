import { lazy, Suspense } from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"

const AboutSection = lazy(() => import("./components/AboutSection"))
const InstitutionsSection = lazy(() => import("./components/InstitutionsSection"))
const AreasFormacion = lazy(() => import("./components/AreasFormacion.jsx"))
const Experiencias = lazy(() => import("./components/Experiencias"))
const Numeralia = lazy(() => import("./components/Numeralia"))
const InformacionContacto = lazy(() => import("./components/InformacionContacto"))
const FooterRavsoja = lazy(() => import("./components/FooterRavsoja"))

function SectionFallback({ id, height = "32rem" }) {
  return (
    <div
      id={id}
      className="section-fallback"
      style={{ minHeight: height }}
      aria-hidden="true"
    />
  )
}


function App() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido-principal" className="bg-white">
        <Hero />

        <Suspense fallback={<SectionFallback id="instituciones" height="48rem" />}>
          <InstitutionsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback id="quienes-somos" />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback id="areas-formacion" height="48rem" />}>
          <AreasFormacion />
        </Suspense>

        <Suspense fallback={<SectionFallback id="experiencias" height="48rem" />}>
          <Experiencias />
        </Suspense>

        <Suspense fallback={<SectionFallback id="numeralia" />}>
          <Numeralia />
        </Suspense>

        <Suspense fallback={<SectionFallback id="contacto" height="42rem" />}>
          <InformacionContacto />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback height="24rem" />}>
        <FooterRavsoja />
      </Suspense>
    </>
  )
}

export default App
