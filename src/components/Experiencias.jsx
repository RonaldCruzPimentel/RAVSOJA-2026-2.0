import { useEffect, useRef, useState } from "react";
import "./Experiencias.css";

/* Portadas de testimonios */
import portadaRegenerativa from "../assets/portadas/MEDREG.jpeg";
import portadaAcupuntura from "../assets/portadas/ACUPUNTURA.jpeg";
import portadaTanatologia from "../assets/portadas/TANA.jpeg";

/* Videos */
import videoRegenerativaMp4 from "../assets/videos/optimized/REGENERATIVA.mp4";
import videoRegenerativaWebm from "../assets/videos/optimized/REGENERATIVA.webm";
import videoAcupunturaMp4 from "../assets/videos/optimized/ACUPUNTURA.mp4";
import videoAcupunturaWebm from "../assets/videos/optimized/ACUPUNTURA.webm";
import videoTanatologiaMp4 from "../assets/videos/optimized/TANATOLOGIA.mp4";
import videoTanatologiaWebm from "../assets/videos/optimized/TANATOLOGIA.webm";

/* Fotografías de graduaciones */
import graduacion1 from "../assets/graduaciones/graduacion1.webp";
import graduacion2 from "../assets/graduaciones/graduacion2.webp";
import graduacion3 from "../assets/graduaciones/graduacion3.webp";
import graduacion4 from "../assets/graduaciones/graduacion4.webp";

const testimonios = [
  {
    id: 1,
    portada: portadaRegenerativa,
    videoMp4: videoRegenerativaMp4,
    videoWebm: videoRegenerativaWebm,
    programa: "Medicina Regenerativa y Células Madre",
    alumno: "Egresado",
    ubicacion: "Guadalajara",
    frase:
      "Aprendí con práctica real y me ayudó a dar el siguiente paso profesional.",
  },
  {
    id: 2,
    portada: portadaAcupuntura,
    videoMp4: videoAcupunturaMp4,
    videoWebm: videoAcupunturaWebm,
    programa: "Acupuntura y Quiropráctica",
    alumno: "Alumna",
    ubicacion: "RAVSOJA ORO",
    frase:
      "Me encantó la atención y el acompañamiento, todo muy claro y profesional.",
  },
  {
    id: 3,
    portada: portadaTanatologia,
    videoMp4: videoTanatologiaMp4,
    videoWebm: videoTanatologiaWebm,
    programa: "Tanatología",
    alumno: "Egresada",
    ubicacion: "Estado de México",
    frase:
      "Pude reforzar con grabaciones y la práctica fue excelente.",
  },
];

const graduaciones = [
  {
    id: 1,
    imagen: graduacion1,
    titulo: "Graduación RAVSOJA",
    descripcion: "Celebramos el esfuerzo y la preparación de nuestros egresados.",
  },
  {
    id: 2,
    imagen: graduacion2,
    titulo: "Historias de éxito",
    descripcion: "Cada generación representa una nueva meta alcanzada.",
  },
  {
    id: 3,
    imagen: graduacion3,
    titulo: "Comunidad RAVSOJA",
    descripcion: "Alumnos, docentes y familias compartiendo un momento especial.",
  },
  {
    id: 4,
    imagen: graduacion4,
    titulo: "Donde tú perteneces",
    descripcion: "Una experiencia educativa que continúa después de graduarse.",
  },
];

function Experiencias() {
  const [videoActivo, setVideoActivo] = useState(null);
  const [fotoActiva, setFotoActiva] = useState(null);
  const [graduacionActiva, setGraduacionActiva] = useState(0);
  const closeButtonRef = useRef(null);
  const modalTriggerRef = useRef(null);

  const cerrarModal = () => {
    setVideoActivo(null);
    setFotoActiva(null);
    window.requestAnimationFrame(() => modalTriggerRef.current?.focus());
  };

  const anteriorGraduacion = () => {
    setGraduacionActiva((actual) =>
      actual === 0 ? graduaciones.length - 1 : actual - 1
    );
  };

  const siguienteGraduacion = () => {
    setGraduacionActiva((actual) =>
      actual === graduaciones.length - 1 ? 0 : actual + 1
    );
  };

  useEffect(() => {
    const manejarTeclado = (event) => {
      if (event.key === "Escape") {
        cerrarModal();
      }

      if (!videoActivo && !fotoActiva) {
        if (event.key === "ArrowLeft") {
          anteriorGraduacion();
        }

        if (event.key === "ArrowRight") {
          siguienteGraduacion();
        }
      }
    };

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [videoActivo, fotoActiva]);

  useEffect(() => {
    if (videoActivo || fotoActiva) {
      const previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());

      return () => {
        document.body.style.overflow = previousBodyOverflow;
      };
    }

    return undefined;
  }, [videoActivo, fotoActiva]);

  const graduacionSeleccionada = graduaciones[graduacionActiva];

  return (
    <section className="experiencias" id="experiencias">
      <div className="experiencias__contenedor">
        {/* =========================
            HISTORIAS REALES
        ========================== */}
        <div className="experiencias__encabezado">
          <span className="experiencias__etiqueta">EXPERIENCIAS RAVSOJA</span>

          <h2 className="experiencias__titulo">
            Historias <span>Reales</span>
          </h2>

          <p className="experiencias__descripcion">
            Conoce las experiencias de alumnos y egresados que han formado
            parte de nuestra comunidad educativa.
          </p>
        </div>

        <div className="testimonios">
          {testimonios.map((testimonio) => (
            <article className="testimonio-card" key={testimonio.id}>
              <button
                className="testimonio-card__media"
                type="button"
                onClick={(event) => {
                  modalTriggerRef.current = event.currentTarget;
                  setVideoActivo(testimonio);
                }}
                aria-label={`Reproducir testimonio de ${testimonio.programa}`}
              >
                <img
                  src={testimonio.portada}
                  alt={`Testimonio de ${testimonio.programa}`}
                  loading="lazy"
                  decoding="async"
                />

                <span className="testimonio-card__tipo">Video</span>

                <span className="testimonio-card__play" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 7.5L16 12L9 16.5V7.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span className="testimonio-card__overlay" />
              </button>

              <div className="testimonio-card__contenido">
                <h3>{testimonio.programa}</h3>

                <p className="testimonio-card__datos">
                  {testimonio.alumno}
                  <span aria-hidden="true">•</span>
                  {testimonio.ubicacion}
                </p>

                <blockquote>“{testimonio.frase}”</blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            GRADUACIONES
        ========================== */}
        <div className="graduaciones">
          <div className="graduaciones__encabezado">
            <div>
              <span className="graduaciones__etiqueta">
                MOMENTOS QUE TRASCIENDEN
              </span>

              <h2 className="graduaciones__titulo">
                Nuestras <span>Graduaciones</span>
              </h2>
            </div>

            <p className="graduaciones__descripcion">
              Cada fotografía representa esfuerzo, crecimiento y el inicio de
              nuevas oportunidades profesionales.
            </p>
          </div>

          <div className="graduaciones__galeria">
            <div className="graduaciones__principal">
              <button
                className="graduaciones__imagen-principal"
                type="button"
                onClick={(event) => {
                  modalTriggerRef.current = event.currentTarget;
                  setFotoActiva(graduacionSeleccionada);
                }}
                aria-label="Ampliar fotografía de graduación"
              >
                <img
                  key={graduacionSeleccionada.id}
                  src={graduacionSeleccionada.imagen}
                  alt={graduacionSeleccionada.titulo}
                  loading="lazy"
                  decoding="async"
                />

                <span className="graduaciones__sombra" />

                <div className="graduaciones__informacion">
                  <span>
                    {String(graduacionActiva + 1).padStart(2, "0")} /{" "}
                    {String(graduaciones.length).padStart(2, "0")}
                  </span>

                  <h3>{graduacionSeleccionada.titulo}</h3>

                  <p>{graduacionSeleccionada.descripcion}</p>
                </div>
              </button>

              <div className="graduaciones__controles">
                <button
                  type="button"
                  onClick={anteriorGraduacion}
                  aria-label="Fotografía anterior"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={siguienteGraduacion}
                  aria-label="Siguiente fotografía"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="graduaciones__miniaturas">
              {graduaciones.map((graduacion, index) => (
                <button
                  key={graduacion.id}
                  type="button"
                  className={`graduaciones__miniatura ${
                    graduacionActiva === index
                      ? "graduaciones__miniatura--activa"
                      : ""
                  }`}
                  onClick={() => setGraduacionActiva(index)}
                  aria-label={`Mostrar fotografía ${index + 1}`}
                >
                  <img
                    src={graduacion.imagen}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                  />

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MODAL DE VIDEO
      ========================== */}
      {videoActivo && (
        <div
          className="experiencias-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonio de ${videoActivo.programa}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              cerrarModal();
            }
          }}
        >
          <div className="experiencias-modal__contenido">
            <button
              className="experiencias-modal__cerrar"
              ref={closeButtonRef}
              type="button"
              onClick={cerrarModal}
              aria-label="Cerrar video"
            >
              ×
            </button>

            <div className="experiencias-modal__video">
              <video
                poster={videoActivo.portada}
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src={videoActivo.videoWebm} type="video/webm" />
                <source src={videoActivo.videoMp4} type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
            </div>

            <div className="experiencias-modal__informacion">
              <span>TESTIMONIO RAVSOJA</span>
              <h3>{videoActivo.programa}</h3>

              <p>
                {videoActivo.alumno} · {videoActivo.ubicacion}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          MODAL DE FOTOGRAFÍA
      ========================== */}
      {fotoActiva && (
        <div
          className="experiencias-modal experiencias-modal--foto"
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada de graduación"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              cerrarModal();
            }
          }}
        >
          <div className="experiencias-modal__foto">
            <button
              className="experiencias-modal__cerrar"
              ref={closeButtonRef}
              type="button"
              onClick={cerrarModal}
              aria-label="Cerrar fotografía"
            >
              ×
            </button>

            <img src={fotoActiva.imagen} alt={fotoActiva.titulo} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experiencias;
