import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, ChevronDown, GraduationCap } from "lucide-react"
import { gsap } from "gsap"
import "./Navbar.css"
import { ThemeSwitch } from "../ui/theme-switch"
import { MenuToggleIcon } from "../ui/menu-toggle-icon"
import { WhatsAppIcon } from "../ui/WhatsAppIcon"
import crest from "../../assets/logos/ravsoja.webp"
import cuetmx from "../../assets/logos/cuetmx-logo.webp"
import inafam from "../../assets/logos/inafam-logo.webp"
import nicolas from "../../assets/logos/nicolas-logo.webp"
import antares from "../../assets/logos/antares-logo.webp"

const site = ""
const whatsapp = "https://wa.me/529615987134?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20oferta%20educativa%20de%20RAVSOJA."
const institutions = [
  { name: "CUETMX", detail: "Especialidades terapéuticas", logo: cuetmx, url: "https://cuetmx.ravsoja.com/" },
  { name: "INAFAM", detail: "Actualización y formación", logo: inafam, url: "https://inafam.ravsoja.com/" },
  { name: "Nicolás Maquiavelo", detail: "Formación jurídica", logo: nicolas, url: "https://nicolasmaquiavelo.ravsoja.com/" },
  { name: "ANTARES", detail: "Capacitación y desarrollo humano", logo: antares, url: "https://antares.ravsoja.com/" },
]

function InstitutionLinks({ onNavigate }) {
  return institutions.map((institution) => (
    <a className="institution-link" key={institution.name} href={institution.url} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
      <span className="institution-logo"><img src={institution.logo} alt="" width="40" height="40" /></span>
      <span className="institution-copy"><strong>{institution.name}</strong><small>{institution.detail}</small></span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  ))
}

function ActionLinks() {
  return <>
    <a className="action action--whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar a RAVSOJA por WhatsApp">
      <WhatsAppIcon /><span>WhatsApp</span>
    </a>
    <a className="action action--portal" href={site + "/portal-alumno.html"} target="_blank" rel="noopener noreferrer">
      <GraduationCap size={18} strokeWidth={1.8} aria-hidden="true" /><span>Portal Alumno</span>
    </a>
  </>
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [institutionsOpen, setInstitutionsOpen] = useState(false)
  const [highlight, setHighlight] = useState(null)
  const header = useRef(null)
  const mobileTrigger = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const element = header.current
    const measure = () => document.documentElement.style.setProperty("--navbar-height", `${element.offsetHeight}px`)
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    measure()
    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".header-row", { opacity: 0, y: -10, duration: .65, ease: "power3.out", clearProps: "opacity,transform" })
      })
    }, element)
    return () => { observer.disconnect(); media.revert(); context.revert() }
  }, [])

  useEffect(() => {
    const dismiss = (event) => {
      if (!header.current?.contains(event.target)) {
        setMobileOpen(false)
        setInstitutionsOpen(false)
        setHighlight(null)
      }
    }
    const breakpoint = window.matchMedia("(min-width: 1280px)")
    const resize = () => { setMobileOpen(false); setInstitutionsOpen(false); setHighlight(null) }
    document.addEventListener("pointerdown", dismiss)
    breakpoint.addEventListener("change", resize)
    return () => {
      document.removeEventListener("pointerdown", dismiss)
      breakpoint.removeEventListener("change", resize)
    }
  }, [])

  function handleEscape(event) {
    if (event.key !== "Escape") return
    if (institutionsOpen) {
      const trigger = [...header.current.querySelectorAll('.institution-trigger[aria-expanded="true"]')].find((element) => element.getClientRects().length > 0)
      trigger?.focus()
      setInstitutionsOpen(false)
    } else if (mobileOpen) {
      setMobileOpen(false)
      mobileTrigger.current?.focus()
    }
  }

  function pill(label, target, dropdown = false) {
    const Tag = dropdown ? "button" : "a"
    return <Tag
      className={"nav-pill" + (dropdown ? " institution-trigger" : "")}
      {...(dropdown ? {
        type: "button", "aria-expanded": institutionsOpen, "aria-controls": "desktop-institutions",
        onClick: () => setInstitutionsOpen(!institutionsOpen),
      } : { href: target.startsWith("/") ? target : site + "/#" + target })}
      onPointerEnter={() => setHighlight(label)} onFocus={() => setHighlight(label)}
    >
      {highlight === label && <motion.span aria-hidden="true" className="nav-pill__fill" layoutId="navigation-highlight" transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 390, damping: 32 }} />}
      <span className="nav-pill__label">{label}</span>
      {dropdown ? <ChevronDown className={institutionsOpen ? "chevron is-open" : "chevron"} size={13} aria-hidden="true" /> : <ArrowUpRight className="nav-arrow" size={13} aria-hidden="true" />}
    </Tag>
  }

  return (
    <>
    <header className="rav-header header-wrap" ref={header} onClick={(event) => {
      if (event.target.closest("a")) { setMobileOpen(false); setInstitutionsOpen(false); setHighlight(null) }
    }} onKeyDown={handleEscape} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) { setMobileOpen(false); setInstitutionsOpen(false); setHighlight(null) }
    }}>
      <div className="header-row">
        <a className="brand" href={site + "/#inicio"} aria-label="Ir al inicio de RAVSOJA">
          <img className="brand__crest" src={crest} alt="" width="58" height="58" fetchPriority="high" />
          <span className="brand__type"><small>Consorcio Educativo</small><strong>RAVSOJA</strong></span>
        </a>
        <div className="header-controls">
        <div className="navigation-capsule">
          <nav className="desktop-nav" aria-label="Navegación principal" onPointerLeave={() => setHighlight(institutionsOpen ? "Instituciones" : null)}>
            {pill("Experiencias", "experiencias")}
            {pill("Oferta educativa", "/oferta-educativa.html")}
            <div className="institution-disclosure">
              {pill("Instituciones", "instituciones", true)}
              <div id="desktop-institutions" className="institution-dropdown" hidden={!institutionsOpen}>
                <InstitutionLinks onNavigate={() => setInstitutionsOpen(false)} />
              </div>
            </div>
            {pill("Áreas de formación", "areas-formacion")}
            {pill("Contacto", "contacto")}
          </nav>
          <div className="desktop-actions"><ActionLinks /></div>
          <button className="menu-toggle" ref={mobileTrigger} type="button" aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(!mobileOpen); setInstitutionsOpen(false) }}>
            <MenuToggleIcon open={mobileOpen} width={32} height={32} aria-hidden="true" duration={reduced ? 0 : 350} />
          </button>
        </div>
        <ThemeSwitch />
        </div>
      </div>
      <nav className={`mobile-navigation${mobileOpen ? " is-open" : ""}`} id="mobile-navigation" aria-label="Navegación móvil" aria-hidden={!mobileOpen} inert={!mobileOpen}>
        <a className="mobile-link" href="/oferta-educativa.html">Oferta educativa <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a className="mobile-link" href={site + "/#experiencias"}>Experiencias <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button type="button" className="mobile-link institution-trigger" aria-controls="mobile-institutions" aria-expanded={institutionsOpen} onClick={() => setInstitutionsOpen(!institutionsOpen)}>Instituciones <ChevronDown size={17} className={institutionsOpen ? "chevron is-open" : "chevron"} aria-hidden="true" /></button>
        <div id="mobile-institutions" className="mobile-institutions" hidden={!institutionsOpen}><InstitutionLinks onNavigate={() => { setMobileOpen(false); setInstitutionsOpen(false) }} /></div>
        <a className="mobile-link" href={site + "/#areas-formacion"}>Áreas de formación <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a className="mobile-link" href={site + "/#contacto"}>Contacto <ArrowUpRight size={17} aria-hidden="true" /></a>
        <div className="mobile-actions"><ActionLinks /></div>
      </nav>
    </header>
    </>
  )
}
