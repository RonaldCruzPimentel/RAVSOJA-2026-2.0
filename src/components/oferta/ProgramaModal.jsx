import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ArrowUpRight, ChevronsDown, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const tabs = [
  { id: "informacion", label: "Información" },
  { id: "mapa", label: "Mapa curricular" },
  { id: "docentes", label: "Docentes" },
  { id: "calendario", label: "Calendario" },
];

const SEAL_IMAGE = (import.meta.env.BASE_URL + "catalogo/cuetmx/otros/SELLO RAVSOJA.png");

export default function ProgramaModal({ program, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const tabsRef = useRef(null);
  const bodyRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [showExplore, setShowExplore] = useState(false);
  const [activeTab, setActiveTab] = useState("informacion");
  const [showCurriculumNotice, setShowCurriculumNotice] = useState(false);

  useEffect(() => {
    const previous = document.activeElement
    const page = document.getElementById("root")
    const wasInert = page?.inert
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    if (page) page.inert = true
    const handleKeys = (event) => {
      if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); onClose() }
      if (event.key !== "Tab") return
      const focusable = [...dialogRef.current.querySelectorAll('a[href],button:not([disabled]),summary,[tabindex="0"]')].filter((item) => item.getClientRects().length && item.tabIndex >= 0)
      const first = focusable[0], last = focusable.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    window.addEventListener("keydown", handleKeys)
    closeButtonRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", handleKeys)
      document.body.style.overflow = previousOverflow
      if (page) page.inert = wasInert
      previous?.focus({ preventScroll: true })
    }
  }, [onClose]);

  useEffect(() => {
    const scroll = scrollRef.current;
    const navigation = tabsRef.current;
    if (!scroll || !navigation) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const viewport = scroll.getBoundingClientRect();
        const tabBounds = navigation.getBoundingClientRect();
        setShowExplore(scroll.scrollHeight > scroll.clientHeight + 8 &&
          scroll.scrollTop < 32 && tabBounds.bottom > viewport.bottom + 8);
      });
    };
    const intersection = new IntersectionObserver(update, { root: scroll, threshold: [0, 1] });
    const resize = new ResizeObserver(update);
    intersection.observe(navigation);
    resize.observe(scroll);
    resize.observe(bodyRef.current);
    scroll.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      resize.disconnect();
      scroll.removeEventListener("scroll", update);
    };
  }, []);

  if (!program) return null;

  const curriculum = program.curriculum
  const coverImage = program.modalImage || program.image
  const calendar = program.calendar || []
  const teachers = program.teachers
  const whatsappUrl = program.whatsappUrl
  const reveal = {
    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .45, ease: [.22, 1, .36, 1] } },
  };
  const explore = () => {
    const scroll = scrollRef.current;
    const navigation = tabsRef.current;
    // Measure relative to the internal scroller; never scroll the document.
    const top = navigation.getBoundingClientRect().top - scroll.getBoundingClientRect().top + scroll.scrollTop;
    navigation.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
    scroll.scrollTo({ top, behavior: reducedMotion ? "instant" : "smooth" });
  };

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const downloadButton = (href, label) => href ? (
    <a href={href} download className="rv-offer-download-btn">
      <Download className="rv-offer-download-btn__icon" size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  ) : <p className="rv-offer-modal__download-note">Documento por confirmar.</p>;

  return createPortal(
    <motion.div className="rv-offer-modal rv-offer-modal--editorial" style={{ "--modal-accent": program.institution.color }} data-institute={program.institutionId} onMouseDown={handleBackdrop} role="presentation" initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : .2 }}>
      <motion.section
        ref={dialogRef}
        className="rv-offer-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rv-offer-program-title"
        data-lenis-prevent
        initial={reducedMotion ? false : { opacity: 0, scale: .98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : .35, ease: [.22, 1, .36, 1] }}
      >
        <div className="rv-offer-modal__toolbar">
          <span>{program.category} <span aria-hidden="true">/</span> {program.institution.nombre}</span>
        <button
          ref={closeButtonRef}
          className="rv-offer-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar información del programa"
        >
          <span />
          <span />
        </button>
        </div>

        <div className="rv-offer-modal__scroll" ref={scrollRef} data-lenis-prevent tabIndex={0} aria-label="Contenido del programa">
        <div ref={bodyRef} className="rv-offer-modal__body">
        <motion.div className="rv-offer-modal__hero" data-long-title={program.title.length > 65 || undefined} initial={reducedMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { staggerChildren: .07, delayChildren: .1 } } }}>
          <motion.div className="rv-offer-modal__hero-image" variants={reducedMotion ? undefined : reveal}>
            <img src={coverImage} className={program.isLogoCover ? "is-logo" : undefined} alt={program.isLogoCover ? program.institution.nombre : `Portada de ${program.title}`} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = program.fallbackImage }} />
          </motion.div>

          <div className="rv-offer-modal__hero-content">
            <motion.p variants={reducedMotion ? undefined : reveal} className="rv-offer-modal__eyebrow"><img src={program.institution.logo} alt="" />{program.institution.nombre}</motion.p>
            <motion.h2 variants={reducedMotion ? undefined : reveal} id="rv-offer-program-title">{program.title}</motion.h2>
            <motion.p variants={reducedMotion ? undefined : reveal} className="rv-offer-modal__hero-description">
              {program.description || "La descripción académica de este programa está pendiente de publicación. Consulta los detalles con Admisiones."}
            </motion.p>

            <motion.div variants={reducedMotion ? undefined : reveal} className="rv-offer-modal__facts">
              <div className="rv-offer-modal__fact"><span>INICIO</span><strong>{program.startLabel.toUpperCase()}</strong></div>
              <div className="rv-offer-modal__fact"><span>DURACIÓN</span><strong>{(program.duration || "Por confirmar").toUpperCase()}</strong></div>
              <div className="rv-offer-modal__fact"><span>MODALIDAD</span><strong>{(program.modality || "Por confirmar").toUpperCase()}</strong></div>
            </motion.div>

            <motion.div variants={reducedMotion ? undefined : reveal} className="rv-offer-modal__action"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="rv-offer-modal__cta">
              <span>Solicitar información</span>
              <span className="rv-offer-modal__cta-arrow" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
            </a></motion.div>
          </div>
        </motion.div>

        <div className="rv-offer-modal__tabs-wrapper" ref={tabsRef}>
          <nav className="rv-offer-modal__tabs" aria-label="Información del programa" role="tablist">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                id={`rv-offer-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls="rv-offer-tabpanel"
                tabIndex={activeTab === tab.id ? 0 : -1}
                onKeyDown={(event) => {
                  const current = tabs.findIndex((item) => item.id === tab.id)
                  const next = event.key === "ArrowRight" ? (current + 1) % tabs.length : event.key === "ArrowLeft" ? (current + tabs.length - 1) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1
                  if (next < 0) return
                  event.preventDefault()
                  setActiveTab(tabs[next].id)
                  document.getElementById(`rv-offer-tab-${tabs[next].id}`)?.focus()
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <motion.div key={activeTab} initial={reducedMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .18 }} className="rv-offer-modal__content" id="rv-offer-tabpanel" role="tabpanel" aria-labelledby={`rv-offer-tab-${activeTab}`} tabIndex={0}>
          {activeTab === "informacion" && (
            <div className="rv-offer-modal__tab-panel">
              <div className="rv-offer-info-grid">
                <div className="rv-offer-info-grid__main">
                  <p className="rv-offer-modal__section-eyebrow">CONOCE EL PROGRAMA</p>
                  <h3>Prepárate para ampliar tus conocimientos profesionales.</h3>
                  <p>{program.description || "La descripción académica de este programa está pendiente de publicación. Consulta los detalles con Admisiones."}</p>

                </div>
                <aside className="rv-offer-info-card">
                  <span className="rv-offer-info-card__number">01</span>
                  <p className="rv-offer-info-card__label">DIRIGIDO A</p>
                  <p>{program.audience || "Público y requisitos de ingreso por confirmar con Admisiones."}</p>
                </aside>
              </div>

              <div className="rv-offer-program-summary">
                <div><span>01</span><small>Inicio</small><strong>{program.startLabel.toUpperCase()}</strong></div>
                <div><span>02</span><small>Duración</small><strong>{(program.duration || "Por confirmar").toUpperCase()}</strong></div>
                <div><span>03</span><small>Modalidad</small><strong>{(program.modality || "Por confirmar").toUpperCase()}</strong></div>
              </div>
            </div>
          )}

          {activeTab === "mapa" && (
            <div className="rv-offer-modal__tab-panel">
              <div className="rv-offer-tab-heading rv-offer-tab-heading--action">
                <div>
                  <p className="rv-offer-modal__section-eyebrow">PLAN DE FORMACIÓN</p>
                  <h3>Mapa curricular</h3>
                  <p>Consulta las áreas principales de estudio del programa.</p>
                </div>
                {downloadButton(program.programPdf, "Descargar PDF")}
              </div>

              {!curriculum.length && <div className="rv-offer-program-placeholder rv-offer-program-placeholder--compact"><p>El mapa curricular se publicará cuando esté confirmado.</p></div>}
              <div className="rv-offer-curriculum">
                {curriculum.map((module) => (
                  <button type="button" className="rv-offer-curriculum__item" key={module.numero} onClick={() => setShowCurriculumNotice(true)}>
                    <span>{module.numero}</span>
                    <div><small>MÓDULO</small><h4>{module.nombre}</h4></div>
                    <span className="rv-offer-curriculum__arrow" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                ))}
              </div>

              {showCurriculumNotice && (
                <p className="rv-offer-curriculum__notice" role="status">
                  {program.programPdf ? "Para consultar el mapa curricular completo, utiliza Descargar PDF." : "El contenido detallado de los módulos está pendiente de publicación."}
                </p>
              )}
            </div>
          )}

          {activeTab === "docentes" && (
            teachers.length > 0 ? (
              <div className="rv-offer-modal__tab-panel">
                <div className="rv-offer-tab-heading">
                  <p className="rv-offer-modal__section-eyebrow">EQUIPO ACADÉMICO</p>
                  <h3>Docentes</h3>
                  <p>Conoce la formación y experiencia profesional del equipo académico.</p>
                </div>

                <div className="rv-offer-teacher-profiles">
                  {teachers.map((teacher) => (
                    <details className="rv-offer-teacher-profile" key={teacher.numero}>
                      <summary className="rv-offer-teacher-profile__summary">
                        {teacher.foto ? (
                          <div className="rv-offer-teacher-profile__photo"><img src={teacher.foto} alt={teacher.nombre} loading="lazy" decoding="async" /></div>
                        ) : (
                          <div className="rv-offer-teacher-profile__number">{teacher.numero}</div>
                        )}
                        <div className="rv-offer-teacher-profile__heading">
                          <small>DOCENTE</small>
                          <h4 title={teacher.nombre}>{teacher.nombreCorto || teacher.nombre}</h4>
                          <p>{teacher.resumen}</p>
                        </div>
                        <div className="rv-offer-teacher-profile__plus" aria-hidden="true"><span /><span /></div>
                      </summary>

                      <div className="rv-offer-teacher-profile__content">
                        <div className="rv-offer-teacher-profile__education">
                          {(teacher.formacion || []).map((item, index) => (
                            <div className="rv-offer-teacher-data" key={`${teacher.numero}-formacion-${index}`}><small>{item.titulo}</small><p>{item.texto}</p></div>
                          ))}
                        </div>
                        <div className="rv-offer-teacher-experience">
                          <small>LOGROS Y EXPERIENCIA DOCENTE</small>
                          <div className="rv-offer-teacher-experience__list">
                            {(teacher.experiencia || []).map((experience, index) => (
                              <div className="rv-offer-teacher-experience__item" key={`${teacher.numero}-experiencia-${index}`}>
                                <span>{String(index + 1).padStart(2, "0")}</span><p>{experience}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rv-offer-modal__tab-panel rv-offer-program-placeholder">
                <p className="rv-offer-modal__section-eyebrow">EQUIPO ACADÉMICO</p>
                <h3>Docentes próximamente</h3>
                <p>La información del equipo docente será publicada en esta ficha cuando esté confirmada.</p>
              </div>
            )
          )}

          {activeTab === "calendario" && (
            <div className="rv-offer-modal__tab-panel">
              <div className="rv-offer-tab-heading rv-offer-tab-heading--action">
                <div>
                  <p className="rv-offer-modal__section-eyebrow">FECHAS DE CLASES Y PAGOS</p>
                  <h3>Calendario del programa</h3>
                  <p>Consulta las fechas de clases, periodos de pago y sesiones principales.</p>
                </div>
                {downloadButton(program.calendarPdf || program.calendarImage, program.calendarPdf ? "Descargar calendario PDF" : "Descargar calendario (imagen)")}
              </div>

              {calendar.length > 0 ? (
                <div className="rv-offer-calendar-list">
                  {calendar.map((period, index) => (
                    <article className="rv-offer-calendar-row" key={`${period.mes}-${period.anio}`}>
                      <div className="rv-offer-calendar-row__month">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <div><small>MES</small><strong>{period.mes}</strong><p>{period.anio}</p></div>
                      </div>
                      <div className="rv-offer-calendar-row__payment"><small>FECHA DE PAGO</small><strong>{period.pago && !["-", "—"].includes(period.pago) ? period.pago : "Por confirmar"}</strong></div>
                      <div className="rv-offer-calendar-row__classes">
                        {period.clases.map((lesson, lessonIndex) => (
                          <div className="rv-offer-calendar-class" key={`${period.mes}-${period.anio}-${lessonIndex}`}>
                            <div className={`rv-offer-calendar-class__day${lesson.dia.includes('DISPONIBILIDAD') ? ' rv-offer-calendar-class__day--long' : ''}`}><small>DÍA</small><strong>{lesson.dia}</strong></div>
                            <div className="rv-offer-calendar-class__topic"><small>TEMA</small><p>{lesson.tema}</p></div>
                          </div>
                        ))}
                      </div>
                      {period.sello && (
                        <div className="rv-offer-calendar-row__seal-sticker" title="Clase sello RAVSOJA">
                          <img src={SEAL_IMAGE} alt="Clase sello RAVSOJA" />
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rv-offer-program-placeholder rv-offer-program-placeholder--compact"><p>{program.calendarPdf || program.calendarImage ? "Consulta el calendario en el documento adjunto." : "Las fechas de clases y pagos se publicarán cuando estén confirmadas."}</p></div>
              )}
            </div>
          )}
        </motion.div>
        </div>
        </div>
        <div className="rv-offer-modal__explore-slot" data-visible={showExplore}>
          <button type="button" className="rv-offer-modal__explore" onClick={explore} tabIndex={showExplore ? 0 : -1} aria-hidden={!showExplore} aria-label="Desliza para explorar la información académica">
            <span>DESLIZA PARA EXPLORAR</span><ChevronsDown size={20} aria-hidden="true" />
          </button>
        </div>
      </motion.section>
    </motion.div>,
    document.body
  );
}
