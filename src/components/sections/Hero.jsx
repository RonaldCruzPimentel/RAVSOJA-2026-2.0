import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"
import Convenios from "../Convenios"
import "./Hero.css"

const WHATSAPP_URL = "https://wa.me/529615987134?text=Hola%2C%20quiero%20recibir%20orientaci%C3%B3n%20sobre%20la%20oferta%20educativa%20de%20RAVSOJA."

export default function Hero() {
  const stage = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".rav-hero__reveal", {
        opacity: 0, y: 22, duration: .85, stagger: .12,
        ease: "power3.out", clearProps: "opacity,transform",
      })
    }, stage)
    return () => media.revert()
  }, [])
  return (
    <section id="inicio" className="rav-hero" aria-labelledby="hero-title" ref={stage}>
      <div className="rav-hero__ambient" aria-hidden="true" />
      <div className="rav-hero__content">
        <p className="rav-hero__eyebrow rav-hero__reveal">RAVSOJA · DONDE TÚ PERTENECES</p>
        <h1 id="hero-title" className="rav-hero__title">
          <span className="rav-hero__reveal">Tu futuro profesional</span>{" "}
          <em className="rav-hero__reveal">comienza contigo.</em>
        </h1>
        <p className="rav-hero__description rav-hero__reveal">Cuatro instituciones, una misma visión para acompañar tu formación.</p>
        <div className="rav-hero__actions rav-hero__reveal">
          <a className="hero-button hero-button--primary" href="/oferta-educativa.html">
            Explorar oferta educativa
            <span className="hero-button__arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
          </a>
          <a className="hero-button hero-button--secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Hablar con admisiones</a>
        </div>
      </div>
      <div className="rav-hero__alliances rav-hero__reveal"><Convenios /></div>
    </section>
  )
}
