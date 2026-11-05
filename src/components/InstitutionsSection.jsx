import { useEffect, useRef, useState } from "react";
import "./InstitutionsSection.css";

/* =========================================================
   INFORMACIÓN DE LAS INSTITUCIONES
   Orden:
   01 CUETMX
   02 INAFAM
   03 Nicolás Maquiavelo
   04 ANTARES
   ========================================================= */

const institutions = [
  {
    id: "cuetmx",
    shortName: "CUETMX",
    transitionName: "CUETMX",
    fullName:
      "Centro Universitario de Especialidades Terapéuticas de México",
    number: "01",
    logo: (import.meta.env.BASE_URL + "IMGINSTITUCIONES/cuetmx-logo.webp"),
    website: "https://cuetmx.ravsoja.com/",
    offerUrl: (import.meta.env.BASE_URL + "oferta-educativa.html"),

    colors: {
      primary: "#4a1720",
      primaryDark: "#2c1015",
      accent: "#153453",
      background: "#f2f1ed",
      soft: "#f6f2f2",

      /* SOLO COLOR DE LA FOTO */
      imageOverlay: "#551d26",
    },

    eyebrow: "Esfuerzo Y Dedicación Para Alcanzar El Éxito",

    title: "Formación especializada",
    highlightedTitle: "en salud y bienestar.",

    description:
      "CUETMX forma profesionales en terapias complementarias, salud integral y estética mediante programas que integran conocimientos científicos, técnicas innovadoras y experiencia práctica.",

    imageLabel: "Experiencia CUETMX",
    imageTitle:
      "Conocimiento que transforma trayectorias profesionales.",

    benefits: [
      {
        icon: "graduation",
        title: "Formación práctica",
        text: "Programas orientados al desarrollo profesional.",
      },
      {
        icon: "shield",
        title: "Respaldo institucional",
        text: "Parte del Consorcio Educativo RAVSOJA.",
      },
      {
        icon: "play",
        title: "Acceso a grabaciones",
        text: "Consulta nuevamente tus clases y contenidos.",
      },
    ],

    programs: [
      {
        id: "cuet-01",
        month: "Agosto",
        category: "Diplomado",
        title:
          "Farmacología Clínica para la Prescripción de Medicamentos en Enfermería",
        shortTitle: "Farmacología Clínica",
        detail: "8 meses",
        featured: true,
      },
      {
        id: "cuet-02",
        month: "Agosto",
        category: "Diplomado",
        title: "Auxiliar en Medicina Estética",
        shortTitle: "Auxiliar en Medicina Estética",
        detail: "12 meses",
      },
      {
        id: "cuet-03",
        month: "Agosto",
        category: "Diplomado",
        title: "Medicina Regenerativa y Células Madre",
        shortTitle: "Medicina Regenerativa",
        detail: "12 meses",
      },
      {
        id: "cuet-04",
        month: "Agosto",
        category: "Diplomado",
        title: "Bariatría",
        shortTitle: "Bariatría",
        detail: "12 meses",
      },
      {
        id: "cuet-05",
        month: "Septiembre",
        category: "Diplomado",
        title: "Cosmiatría Facial y Corporal Avanzada",
        shortTitle: "Cosmiatría Avanzada",
        detail: "Próximo inicio",
      },
      {
        id: "cuet-06",
        month: "Agosto",
        category: "Taller",
        title: "Bubble Pen",
        shortTitle: "Bubble Pen",
        detail: "Taller especializado",
      },
    ],
  },

  {
    id: "inafam",
    shortName: "INAFAM",
    transitionName: "INAFAM",
    fullName:
      "Instituto Nacional de Actualización y Formación en Ciencias de la Salud",
    number: "02",
    logo: (import.meta.env.BASE_URL + "IMGINSTITUCIONES/inafam-logo.webp"),
    website: "https://inafam.ravsoja.com/",
    offerUrl: "https://inafam.ravsoja.com/#diplomados",

    colors: {
      primary: "#114f5e",
      primaryDark: "#083842",
      accent: "#0098c1",
      background: "#f6f6f6",
      soft: "#e7f4f2",

      /* CONSERVA EL COLOR ACTUAL */
      imageOverlay: "#0098c1",
    },

    eyebrow: "RESULTADOS CON EXCELENCIA",

    title: "Formación continua",
    highlightedTitle: "con enfoque humano.",

    description:
      "INAFAM fortalece las competencias de los profesionales de la salud mediante diplomados especializados, formación flexible y conocimientos actualizados orientados a una atención integral, ética y humanizada.",

    imageLabel: "Experiencia INAFAM",
    imageTitle:
      "Actualización profesional para transformar el cuidado de la salud.",

    benefits: [
      {
        icon: "monitor",
        title: "Modalidad flexible",
        text: "Clases online sincrónicas y acceso a contenidos grabados.",
      },
      {
        icon: "users",
        title: "Docentes especializados",
        text: "Profesionales nacionales e internacionales.",
      },
      {
        icon: "document",
        title: "Legislación en Salud",
        text: "Orientación sobre permisos sanitarios y documentación.",
      },
    ],

    programs: [
      {
        id: "inafam-01",
        month: "Agosto",
        category: "Diplomado",
        title: "Ginecología Estética",
        shortTitle: "Ginecología Estética",
        detail: "Próximo inicio",
        featured: true,
      },
      {
        id: "inafam-02",
        month: "Agosto",
        category: "Diplomado",
        title: "Química Cosmética",
        shortTitle: "Química Cosmética",
        detail: "Próximo inicio",
      },
      {
        id: "inafam-03",
        month: "Agosto",
        category: "Diplomado",
        title: "Manejo Avanzado y Curación de Heridas",
        shortTitle: "Curación de Heridas",
        detail: "Próximo inicio",
      },
      {
        id: "inafam-04",
        month: "Agosto",
        category: "Diplomado",
        title: "Oncocosmiatría",
        shortTitle: "Oncocosmiatría",
        detail: "Próximo inicio",
      },
      {
        id: "inafam-05",
        month: "Septiembre",
        category: "Diplomado",
        title: "Enfermería Estética",
        shortTitle: "Enfermería Estética",
        detail: "Próximo inicio",
      },
      {
        id: "inafam-06",
        month: "Septiembre",
        category: "Diplomado",
        title: "Medicina Regenerativa y Células Madre",
        shortTitle: "Medicina Regenerativa",
        detail: "Próximo inicio",
      },
      {
        id: "inafam-07",
        month: "Septiembre",
        category: "Diplomado",
        title: "Dermocosmiatría",
        shortTitle: "Dermocosmiatría",
        detail: "Próximo inicio",
      },
    ],
  },

  {
    id: "nicolas",
    shortName: "NICOLÁS",
    transitionName: "NICOLÁS MAQUIAVELO",
    fullName:
      "Academia de Ciencias Sociopolíticas y Jurídicas Nicolás Maquiavelo",
    number: "03",
    logo: (import.meta.env.BASE_URL + "IMGINSTITUCIONES/nicolas-logo.webp"),
    website: "https://nicolasmaquiavelo.ravsoja.com/",
    offerUrl:
      "https://nicolasmaquiavelo.ravsoja.com/#diplomados",

    colors: {
      primary: "#212950",
      primaryDark: "#131936",
      accent: "#781613",
      background: "#e6e1da",
      soft: "#f1eeea",

      /* SOLO COLOR DE LA FOTO */
      imageOverlay: "#781613",
    },

    eyebrow: "CONOCER EL PODER, PARA EL BIEN COMÚN",

    title: "Conocimiento jurídico",
    highlightedTitle: "que transforma instituciones.",

    description:
      "La Academia Nicolás Maquiavelo forma y actualiza profesionales mediante programas especializados en Derecho, ciencias sociopolíticas y gestión pública, con pensamiento crítico, rigor académico y compromiso con la justicia.",

    imageLabel: "Experiencia Nicolás Maquiavelo",
    imageTitle:
      "Formación jurídica para fortalecer el Estado de Derecho.",

    benefits: [
      {
        icon: "scale",
        title: "Especialización jurídica",
        text: "Programas enfocados en actualización y práctica profesional.",
      },
      {
        icon: "book",
        title: "Pensamiento crítico",
        text: "Análisis jurídico, investigación y argumentación.",
      },
      {
        icon: "shield",
        title: "Ética institucional",
        text: "Compromiso con la justicia y el Estado de Derecho.",
      },
    ],

    programs: [
      {
        id: "nicolas-01",
        month: "Septiembre",
        category: "Diplomado",
        title:
          "Derecho Sanitario y Prevención de Riesgos Legales en la Salud",
        shortTitle: "Derecho Sanitario",
        detail: "Próximo inicio",
        featured: true,
      },
      {
        id: "nicolas-02",
        month: "Septiembre",
        category: "Taller",
        title:
          "Responsabilidad Profesional Médica y Prevención de Demandas",
        shortTitle: "Responsabilidad Médica",
        detail: "Próximo inicio",
      },
      {
        id: "nicolas-03",
        month: "Octubre",
        category: "Diplomado",
        title:
          "Nuevo Código Nacional de Procedimientos Civiles y Familiares",
        shortTitle: "Nuevo Código Nacional",
        detail: "Próximo inicio",
      },
      {
        id: "nicolas-04",
        month: "Octubre",
        category: "Diplomado",
        title:
          "Medios Probatorios en el Código Nacional de Procedimientos Civiles y Familiares",
        shortTitle: "Medios Probatorios",
        detail: "Próximo inicio",
      },
    ],
  },

  {
    id: "antares",
    shortName: "ANTARES",
    transitionName: "ANTARES",
    fullName:
      "Instituto de Capacitación Laboral y Desarrollo Humano ANTARES",
    number: "04",
    logo: (import.meta.env.BASE_URL + "IMGINSTITUCIONES/antares-logo.webp"),
    website: "https://antares.ravsoja.com/",
    offerUrl: "https://antares.ravsoja.com/#oferta",

    colors: {
      primary: "#432153",
      primaryDark: "#2d133a",
      accent: "#6c3d7d",
      background: "#f6f1f5",
      soft: "#eadeec",

      /* CONSERVA EL COLOR ACTUAL */
      imageOverlay: "#6c3d7d",
    },

    eyebrow: "DESARROLLANDO TALENTOS, CONSTRUYENDO LÍDERES",

    title: "Talento humano",
    highlightedTitle: "que transforma organizaciones.",

    description:
      "ANTARES impulsa el crecimiento personal y profesional mediante capacitación laboral, desarrollo humano y psicología organizacional, formando líderes capaces de crear entornos saludables, empáticos y productivos.",

    imageLabel: "Experiencia ANTARES",
    imageTitle: "Desarrollando talentos, construyendo líderes.",

    benefits: [
      {
        icon: "leadership",
        title: "Desarrollo de liderazgo",
        text: "Habilidades para dirigir equipos y transformar organizaciones.",
      },
      {
        icon: "heart",
        title: "Desarrollo humano",
        text: "Empatía, resiliencia y crecimiento profesional.",
      },
      {
        icon: "network",
        title: "Red profesional",
        text: "Conexión con las instituciones del Consorcio RAVSOJA.",
      },
    ],

    programs: [
      {
        id: "antares-01",
        month: "Agosto",
        category: "Diplomado",
        title: "Alta Dirección y Liderazgo Efectivo",
        shortTitle: "Alta Dirección y Liderazgo",
        detail: "Próximo inicio",
        featured: true,
      },
      {
        id: "antares-02",
        month: "Septiembre",
        category: "Diplomado",
        title: "Community Manager",
        shortTitle: "Community Manager",
        detail: "Próximo inicio",
      },
      {
        id: "antares-03",
        month: "Próximamente",
        category: "Programa especial",
        title: "Pases VIP",
        shortTitle: "Pases VIP",
        detail: "Acceso especial",
      },
    ],
  },
];

/* =========================================================
   ICONOS
   ========================================================= */

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12.5V17c2.6 2 7.4 2 10 0v-4.5" />
      <path d="M21 10v6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M5 6h14" />
      <path d="m5 6-3 6h6L5 6Z" />
      <path d="m19 6-3 6h6l-3-6Z" />
      <path d="M8 21h8" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  );
}

function LeadershipIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      <path d="m18 5 1.5 1.5L22 4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="18" r="3" />
      <circle cx="19" cy="18" r="3" />
      <path d="m10.5 7.6-4 7.1" />
      <path d="m13.5 7.6 4 7.1" />
      <path d="M8 18h8" />
    </svg>
  );
}

function BenefitIcon({ type }) {
  const icons = {
    graduation: <GraduationIcon />,
    shield: <ShieldIcon />,
    play: <PlayIcon />,
    monitor: <MonitorIcon />,
    users: <UsersIcon />,
    document: <DocumentIcon />,
    scale: <ScaleIcon />,
    book: <BookIcon />,
    leadership: <LeadershipIcon />,
    heart: <HeartIcon />,
    network: <NetworkIcon />,
  };

  return icons[type] || <GraduationIcon />;
}

/* =========================================================
   COMPONENTE
   ========================================================= */

function InstitutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const touchStartYRef = useRef(null);
  const touchEndYRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef([]);

  const activeInstitution = institutions[activeIndex];

  /* =======================================================
     CENTRAR PESTAÑA ACTIVA EN MÓVIL
     ======================================================= */

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    const tabsContainer = tabsContainerRef.current;

    if (!activeTab || !tabsContainer) return;

    const tabCenter =
      activeTab.offsetLeft + activeTab.offsetWidth / 2;

    const containerCenter =
      tabsContainer.clientWidth / 2;

    const targetScrollLeft =
      tabCenter - containerCenter;

    tabsContainer.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  /* =======================================================
     VARIABLES DINÁMICAS DE COLOR
     ======================================================= */

  const sectionStyles = {
    "--institution-primary":
      activeInstitution.colors.primary,

    "--institution-primary-dark":
      activeInstitution.colors.primaryDark,

    "--institution-accent":
      activeInstitution.colors.accent,

    "--institution-background":
      activeInstitution.colors.background,

    "--institution-soft":
      activeInstitution.colors.soft,

    /*
      Esta variable controla ÚNICAMENTE
      el degradado sobre la fotografía.
    */
    "--institution-image-overlay":
      activeInstitution.colors.imageOverlay ||
      activeInstitution.colors.accent,
  };

  /* =======================================================
     CAMBIAR INSTITUCIÓN
     ======================================================= */

  const selectInstitution = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);

    setContentKey(
      (previousKey) => previousKey + 1
    );
  };

  const showPreviousInstitution = () => {
    const previousIndex =
      activeIndex === 0
        ? institutions.length - 1
        : activeIndex - 1;

    selectInstitution(previousIndex);
  };

  const showNextInstitution = () => {
    const nextIndex =
      activeIndex === institutions.length - 1
        ? 0
        : activeIndex + 1;

    selectInstitution(nextIndex);
  };

  /* =======================================================
     DESLIZAMIENTO EN CELULAR
     ======================================================= */

  const handleTouchStart = (event) => {
    touchStartXRef.current =
      event.touches[0].clientX;
    touchStartYRef.current =
      event.touches[0].clientY;

    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndXRef.current =
      event.touches[0].clientX;
    touchEndYRef.current =
      event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartXRef.current === null ||
      touchEndXRef.current === null ||
      touchStartYRef.current === null ||
      touchEndYRef.current === null
    ) {
      return;
    }

    const movement =
      touchStartXRef.current -
      touchEndXRef.current;
    const verticalMovement =
      touchStartYRef.current -
      touchEndYRef.current;

    const minimumSwipeDistance = 55;

    if (
      Math.abs(movement) > Math.abs(verticalMovement) &&
      movement > minimumSwipeDistance
    ) {
      showNextInstitution();
    }

    if (
      Math.abs(movement) > Math.abs(verticalMovement) &&
      movement < -minimumSwipeDistance
    ) {
      showPreviousInstitution();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
    touchStartYRef.current = null;
    touchEndYRef.current = null;
  };

  return (
      <section
        className="institutions-section"
        id="instituciones"
        style={sectionStyles}
      >
        <div
          className="institutions-background-text"
          aria-hidden="true"
        >
          RAVSOJA
        </div>

        <div className="institutions-container">

          {/* =================================================
              ENCABEZADO
              ================================================= */}

          <header className="institutions-heading">
            <div>
              <span className="institutions-eyebrow">
                Consorcio Educativo RAVSOJA
              </span>

              <h2>
                Instituciones que forman
                <span>
                  {" "}
                  profesionales con propósito.
                </span>
              </h2>
            </div>

            <p>
              Descubre las instituciones que
              integran nuestro consorcio y conoce
              una oferta educativa especializada
              para diferentes áreas del desarrollo
              profesional.
            </p>
          </header>

          {/* =================================================
              NAVEGACIÓN
              ================================================= */}

          <div className="institutions-navigation">

            <button
              type="button"
              className="institutions-arrow"
              onClick={
                showPreviousInstitution
              }
              aria-label="Ver institución anterior"
            >
              <ArrowLeftIcon />
            </button>

            <div
              ref={tabsContainerRef}
              className="institutions-tabs"
              role="tablist"
              aria-label="Instituciones de RAVSOJA"
            >
              {institutions.map(
                (institution, index) => (
                  <button
                    ref={(element) => {
                      tabRefs.current[index] =
                        element;
                    }}
                    type="button"
                    role="tab"
                    id={`institution-tab-${institution.id}`}
                    aria-controls="institution-panel"
                    aria-selected={
                      activeIndex === index
                    }
                    className={`institution-tab ${
                      activeIndex === index
                        ? "is-active"
                        : ""
                    }`}
                    key={institution.id}
                    onClick={() =>
                      selectInstitution(index)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        showPreviousInstitution();
                      }

                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        showNextInstitution();
                      }
                    }}
                  >
                    <span>
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <strong>
                      {institution.shortName}
                    </strong>
                  </button>
                )
              )}
            </div>

            <button
              type="button"
              className="institutions-arrow"
              onClick={showNextInstitution}
              aria-label="Ver siguiente institución"
            >
              <ArrowRightIcon />
            </button>
          </div>

          {/* =================================================
              TARJETA DINÁMICA
              ================================================= */}

          <article
            id="institution-panel"
            role="tabpanel"
            aria-labelledby={`institution-tab-${activeInstitution.id}`}
            className="institution-card"
            key={contentKey}
            onTouchStart={
              handleTouchStart
            }
            onTouchMove={
              handleTouchMove
            }
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="institution-card-glow"
              aria-hidden="true"
            />

            {/* COLUMNA IZQUIERDA */}

            <div className="institution-information">

              <div className="institution-brand">

                <div className="institution-logo-container">
                  <img
                    src={
                      activeInstitution.logo
                    }
                    alt={`Logotipo de ${activeInstitution.shortName}`}
                    className="institution-logo"
                  />
                </div>

                <div className="institution-brand-name">

                  <span>
                    Institución del Consorcio
                    RAVSOJA
                  </span>

                  <strong>
                    {
                      activeInstitution.fullName
                    }
                  </strong>
                </div>
              </div>

              <div className="institution-copy">

                <span className="institution-number">
                  {
                    activeInstitution.number
                  }{" "}
                  /{" "}
                  {
                    activeInstitution.shortName
                  }
                </span>

                <span className="institution-area">
                  {
                    activeInstitution.eyebrow
                  }
                </span>

                <h3>
                  {
                    activeInstitution.title
                  }

                  <span>
                    {
                      activeInstitution.highlightedTitle
                    }
                  </span>
                </h3>

                <p>
                  {
                    activeInstitution.description
                  }
                </p>
              </div>

              {/* BENEFICIOS */}

              <div className="institution-benefits">

                {activeInstitution.benefits.map(
                  (benefit) => (
                    <div
                      className="institution-benefit"
                      key={benefit.title}
                    >
                      <span className="institution-benefit-icon">
                        <BenefitIcon
                          type={
                            benefit.icon
                          }
                        />
                      </span>

                      <div>
                        <strong>
                          {
                            benefit.title
                          }
                        </strong>

                        <span>
                          {benefit.text}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* BOTONES */}

              <div className="institution-actions">

                <a
                  href={activeInstitution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="institution-main-button"
                >
                  <span>
                    Visitar sitio{" "}
                    {
                      activeInstitution.shortName
                    }
                  </span>

                  <span className="institution-main-button-icon">
                    <ArrowUpRightIcon />
                  </span>
                </a>

                <a
                  href={
                    activeInstitution.offerUrl
                  }
                  className="institution-secondary-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explorar oferta

                  <ArrowUpRightIcon />
                </a>
              </div>

              <p className="institution-external-note">
                Consulta fechas, modalidades,
                requisitos y la oferta completa en
                el sitio oficial de{" "}
                {
                  activeInstitution.shortName
                }
                .
              </p>
            </div>

            {/* =================================================
                COLUMNA DERECHA
                ================================================= */}

            <div className="institution-programs">

              {/* FOTO */}

              <div className="institution-image-panel">

                <img
                  src={import.meta.env.BASE_URL + "IMGINSTITUCIONES/graduacion-general.webp"}
                  alt="Ceremonia de graduación del Consorcio Educativo RAVSOJA"
                  loading="lazy"
                  decoding="async"
                />

                <div className="institution-image-overlay" />

                <div className="institution-image-content">

                  <span>
                    {
                      activeInstitution.imageLabel
                    }
                  </span>

                  <strong>
                    {
                      activeInstitution.imageTitle
                    }
                  </strong>
                </div>
              </div>

              {/* OFERTA */}

              <div className="institution-programs-panel">

                <div className="institution-programs-heading">

                  <div>
                    <span>
                      Oferta educativa
                    </span>

                    <h4>
                      Próximos programas
                    </h4>
                  </div>

                  <span className="institution-programs-count">
                    {String(
                      activeInstitution.programs
                        .length
                    ).padStart(2, "0")}
                  </span>
                </div>

                <div className="institution-programs-list">

                  {activeInstitution.programs.map(
                    (program, index) => (
                      <a
                        href={
                          activeInstitution.offerUrl
                        }
                        className={`institution-program-item ${
                          program.featured
                            ? "is-featured"
                            : ""
                        }`}
                        key={program.id}
                        title={
                          program.title
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="institution-program-index">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <div className="institution-program-content">

                          <div className="institution-program-meta">

                            <span>
                              {
                                program.month
                              }
                            </span>

                            <span>
                              {
                                program.category
                              }
                            </span>
                          </div>

                          <strong>
                            {
                              program.shortTitle
                            }
                          </strong>

                          <small>
                            {
                              program.detail
                            }
                          </small>
                        </div>

                        <span className="institution-program-arrow">
                          <ArrowUpRightIcon />
                        </span>
                      </a>
                    )
                  )}
                </div>

                <a
                  href={
                    activeInstitution.offerUrl
                  }
                  className="institution-programs-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Ver toda la oferta de{" "}
                    {
                      activeInstitution.shortName
                    }
                  </span>

                  <ArrowUpRightIcon />
                </a>
              </div>
            </div>
          </article>

          {/* =================================================
              INDICADORES MÓVILES
              ================================================= */}

          <div className="institutions-mobile-indicators">

            {institutions.map(
              (institution, index) => (
                <button
                  type="button"
                  key={institution.id}
                  className={
                    activeIndex === index
                      ? "is-active"
                      : ""
                  }
                  onClick={() =>
                    selectInstitution(index)
                  }
                  aria-label={`Mostrar ${institution.shortName}`}
                />
              )
            )}
          </div>
        </div>
      </section>
  );
}

export default InstitutionsSection;
