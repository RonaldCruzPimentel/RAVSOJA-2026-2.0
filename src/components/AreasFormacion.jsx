import "./AreasFormacion.css";

/* Imágenes principales */
import saludImg from "../assets/areas/salud.webp";
import esteticaImg from "../assets/areas/spa.webp";
import derechoImg from "../assets/areas/derecho.webp";
import liderazgoImg from "../assets/areas/liderazgo.webp";
import desarrolloImg from "../assets/areas/desarrollo.webp";
import educacionImg from "../assets/areas/educacion.webp";

/* Stickers */
import minoPrincipal from "../assets/stickers/sticker-ravsoja-01.webp";
import minoAcademico from "../assets/stickers/sticker-ravsoja-02.webp";
import minoNicolas from "../assets/stickers/sticker-ravsoja-03.webp";
import minoCuetmx from "../assets/stickers/sticker-ravsoja-05.webp";
import minoInafam from "../assets/stickers/sticker-ravsoja-06.webp";

/* Logos */
import cuetmxLogo from "../assets/logos/cuetmx-logo.webp";
import inafamLogo from "../assets/logos/inafam-logo.webp";
import nicolasLogo from "../assets/logos/nicolas-logo.webp";
import antaresLogo from "../assets/logos/antares-logo.webp";

const areas = [
  {
    id: "salud",
    numero: "01",
    categoria: "Formación especializada",
    titulo: "Ciencias de la Salud",
    descripcion:
      "Programas diseñados para fortalecer competencias clínicas, técnicas y profesionales mediante formación actualizada y orientada a la práctica.",
    imagen: saludImg,
    alt: "Formación profesional en ciencias de la salud",
    sticker: minoInafam,
    accent: "#0098c1",
    soft: "#e8f7fa",
    instituciones: [
      {
        nombre: "CUETMX",
        logo: cuetmxLogo,
        enlace: "https://cuetmx.ravsoja.com/",
      },
      {
        nombre: "INAFAM",
        logo: inafamLogo,
        enlace: "https://inafam.ravsoja.com/",
      },
    ],
  },
  {
    id: "estetica",
    numero: "02",
    categoria: "Bienestar e innovación",
    titulo: "Estética y Cosmiatría",
    descripcion:
      "Formación orientada a la estética profesional, el cuidado integral, la cosmiatría y la aplicación responsable de técnicas especializadas.",
    imagen: esteticaImg,
    alt: "Formación profesional en estética y cosmiatría",
    sticker: minoCuetmx,
    accent: "#a21a5d",
    soft: "#faedf3",
    instituciones: [
      {
        nombre: "CUETMX",
        logo: cuetmxLogo,
        enlace: "https://cuetmx.ravsoja.com/",
      },
      {
        nombre: "INAFAM",
        logo: inafamLogo,
        enlace: "https://inafam.ravsoja.com/",
      },
    ],
  },
  {
    id: "derecho",
    numero: "03",
    categoria: "Seguridad y conocimiento",
    titulo: "Derecho y Legislación",
    descripcion:
      "Programas enfocados en el conocimiento jurídico, la prevención de riesgos legales y el fortalecimiento de una práctica profesional responsable.",
    imagen: derechoImg,
    alt: "Formación profesional en derecho y legislación",
    sticker: minoNicolas,
    accent: "#781613",
    soft: "#f6eceb",
    instituciones: [
      {
        nombre: "Nicolás Maquiavelo",
        logo: nicolasLogo,
        enlace: "https://nicolasmaquiavelo.ravsoja.com/",
      },
    ],
  },
  {
    id: "liderazgo",
    numero: "04",
    categoria: "Dirección estratégica",
    titulo: "Liderazgo y Negocios",
    descripcion:
      "Herramientas para desarrollar liderazgo efectivo, pensamiento estratégico, comunicación, dirección de equipos y crecimiento organizacional.",
    imagen: liderazgoImg,
    alt: "Formación profesional en liderazgo y negocios",
    sticker: minoPrincipal,
    accent: "#432153",
    soft: "#f1eaf4",
    instituciones: [
      {
        nombre: "ANTARES",
        logo: antaresLogo,
        enlace: "https://antares.ravsoja.com/",
      },
    ],
  },
  {
    id: "desarrollo",
    numero: "05",
    categoria: "Crecimiento integral",
    titulo: "Desarrollo Humano",
    descripcion:
      "Experiencias de aprendizaje que fortalecen habilidades personales, inteligencia emocional, trabajo en equipo y relaciones profesionales.",
    imagen: desarrolloImg,
    alt: "Formación profesional en desarrollo humano",
    sticker: minoAcademico,
    accent: "#319b8d",
    soft: "#e9f6f3",
    instituciones: [
      {
        nombre: "ANTARES",
        logo: antaresLogo,
        enlace: "https://antares.ravsoja.com/",
      },
    ],
  },
  {
    id: "educacion",
    numero: "06",
    categoria: "Aprendizaje permanente",
    titulo: "Educación Continua",
    descripcion:
      "Una oferta académica que permite actualizar conocimientos, ampliar competencias y continuar creciendo en cada etapa de la vida profesional.",
    imagen: educacionImg,
    alt: "Formación profesional y educación continua",
    sticker: minoAcademico,
    accent: "#212a51",
    soft: "#eceef5",
    instituciones: [
      {
        nombre: "CUETMX",
        logo: cuetmxLogo,
        enlace: "https://cuetmx.ravsoja.com/",
      },
      {
        nombre: "INAFAM",
        logo: inafamLogo,
        enlace: "https://inafam.ravsoja.com/",
      },
      {
        nombre: "Nicolás Maquiavelo",
        logo: nicolasLogo,
        enlace: "https://nicolasmaquiavelo.ravsoja.com/",
      },
      {
        nombre: "ANTARES",
        logo: antaresLogo,
        enlace: "https://antares.ravsoja.com/",
      },
    ],
  },
];

function AreasFormacion() {
  return (
    <section
      className="areas-formacion"
      id="areas-formacion"
      aria-labelledby="areas-formacion-titulo"
    >
      <div className="areas-formacion__decoracion" aria-hidden="true">
        <span className="areas-formacion__circulo areas-formacion__circulo--uno" />
        <span className="areas-formacion__circulo areas-formacion__circulo--dos" />
        <span className="areas-formacion__linea-fondo" />
      </div>

      <div className="areas-formacion__contenedor">
        <header className="areas-formacion__encabezado">
          <div className="areas-formacion__encabezado-superior">
            <span className="areas-formacion__etiqueta">
              Explora tu camino
            </span>

            <span className="areas-formacion__contador">
              06 áreas de especialización
            </span>
          </div>

          <div className="areas-formacion__encabezado-grid">
            <h2
              className="areas-formacion__titulo"
              id="areas-formacion-titulo"
            >
              Áreas de
              <span>formación</span>
            </h2>

            <div className="areas-formacion__introduccion">
              <p>
                Descubre las áreas del conocimiento que integran la propuesta
                académica del Consorcio Educativo RAVSOJA.
              </p>

              <span className="areas-formacion__introduccion-linea" />
            </div>
          </div>
        </header>

        <div className="areas-formacion__lista">
          {areas.map((area, index) => {
            const esInvertido = index % 2 !== 0;

            return (
              <article
                key={area.id}
                className={`areas-formacion__item is-visible ${
                  esInvertido ? "areas-formacion__item--invertido" : ""
                }`}
                style={{
                  "--area-accent": area.accent,
                  "--area-soft": area.soft,
                }}
              >
                <div className="areas-formacion__imagen-columna">
                  <div className="areas-formacion__imagen-marco">
                    <img
                      className="areas-formacion__imagen"
                      src={area.imagen}
                      alt={area.alt}
                      loading="lazy"
                      decoding="async"
                    />

                    <div
                      className="areas-formacion__imagen-overlay"
                      aria-hidden="true"
                    />

                    <span
                      className="areas-formacion__imagen-numero"
                      aria-hidden="true"
                    >
                      {area.numero}
                    </span>

                    <img
                      className="areas-formacion__sticker"
                      src={area.sticker}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="areas-formacion__contenido">
                  <div className="areas-formacion__contenido-superior">
                    <span className="areas-formacion__categoria">
                      {area.categoria}
                    </span>

                    <span
                      className="areas-formacion__punto"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="areas-formacion__nombre">
                    {area.titulo}
                  </h3>

                  <p className="areas-formacion__descripcion">
                    {area.descripcion}
                  </p>

                  <div className="areas-formacion__instituciones">
                    <span className="areas-formacion__instituciones-titulo">
                      Instituciones relacionadas
                    </span>

                    <div className="areas-formacion__instituciones-lista">
                      {area.instituciones.map((institucion) => (
                        <a
                          key={`${area.id}-${institucion.nombre}`}
                          className="areas-formacion__institucion"
                          href={institucion.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visitar el sitio de ${institucion.nombre}`}
                        >
                          <span className="areas-formacion__logo-marco">
                            <img
                              src={institucion.logo}
                              alt={`Logo de ${institucion.nombre}`}
                              loading="lazy"
                              decoding="async"
                            />
                          </span>

                          <span className="areas-formacion__institucion-nombre">
                            {institucion.nombre}
                          </span>

                          <span
                            className="areas-formacion__flecha"
                            aria-hidden="true"
                          >
                            ↗
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div
                    className="areas-formacion__detalle"
                    aria-hidden="true"
                  >
                    <span />
                    <small>RAVSOJA</small>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="areas-formacion__cierre">
          <span className="areas-formacion__cierre-linea" />

          <p>
            Diferentes áreas, instituciones especializadas y una misma visión:
            impulsar tu crecimiento profesional.
          </p>

          <span className="areas-formacion__cierre-linea" />
        </div>
      </div>
    </section>
  );
}

export default AreasFormacion;
