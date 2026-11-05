// src/components/FooterRavsoja.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FooterRavsoja.css";

/* LOGOTIPOS REALES DE TU CARPETA */
import logoRavsoja from "../assets/logos/ravsoja-512.webp";
import logoCuetmx from "../assets/logos/cuetmx-logo.webp";
import logoInafam from "../assets/logos/inafam-logo.webp";
import logoNicolas from "../assets/logos/nicolas-logo.webp";
import logoAntares from "../assets/logos/antares-logo.webp";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL = "https://wa.me/529615987134";
const MAPS_URL = "https://maps.app.goo.gl/v4DzYRD1fJUiHHu88";
const TELEFONO_URL = "tel:+529616908474";
const CORREO_URL =
  "mailto:consorcioeducativoravsoja@ravsoja.org";

const institutos = [
  {
    nombre: "CUETMX",
    logo: logoCuetmx,
    enlace: "https://cuetmx.ravsoja.com/",
  },
  {
    nombre: "INAFAM",
    logo: logoInafam,
    enlace: "https://inafam.ravsoja.com/",
  },
  {
    nombre: "NICOLÁS MAQUIAVELO",
    logo: logoNicolas,
    enlace: "https://nicolasmaquiavelo.ravsoja.com/",
  },
  {
    nombre: "ANTARES",
    logo: logoAntares,
    enlace: "https://antares.ravsoja.com/",
  },
];

function FooterIcon({ type }) {
  const icons = {
    phone: (
      <path d="M7 3H5.5A2.5 2.5 0 0 0 3 5.5C3 14.06 9.94 21 18.5 21a2.5 2.5 0 0 0 2.5-2.5V17l-4-1-1.3 2.1a15.4 15.4 0 0 1-9.8-9.8L8 7 7 3Z" />
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    arrow: (
      <>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 9.75.864h-.004a7.94 7.94 0 0 0-6.794 12.071L1.528 17.17l4.349-1.407a7.93 7.93 0 0 0 3.867.98h.004c4.38 0 7.926-3.547 7.926-7.926a7.95 7.95 0 0 0-4.073-6.991Zm-3.85 13.07h-.003a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.573.835.863-2.506-.156-.257a6.6 6.6 0 1 1 5.465 2.992Zm3.632-4.972c-.198-.099-1.17-.578-1.352-.644-.182-.066-.314-.099-.446.099-.132.198-.512.644-.628.776-.116.132-.231.149-.429.05-.198-.1-.836-.308-1.592-.985-.588-.525-.985-1.173-1.1-1.371-.116-.198-.012-.305.087-.404.089-.088.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.61-1.47-.161-.387-.325-.334-.446-.34-.116-.006-.248-.007-.38-.007a.73.73 0 0 0-.528.248c-.182.198-.694.677-.694 1.652s.71 1.916.81 2.049c.099.132 1.396 2.132 3.383 2.992.473.204.842.326 1.129.417.474.151.906.13 1.247.079.38-.057 1.17-.479 1.335-.942.165-.462.165-.859.116-.942-.05-.083-.182-.132-.38-.231Z" />
    </svg>
  );
}

export default function FooterRavsoja() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const columnas = gsap.utils.toArray(
        ".footer-ravsoja__columna"
      );

      gsap.fromTo(
        columnas,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".footer-ravsoja__inferior",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => context.revert();
  }, []);

  return (
    <footer className="footer-ravsoja" ref={footerRef}>
      <div className="footer-ravsoja__cuerpo">
        <div className="footer-ravsoja__contenido">
          <div className="footer-ravsoja__grid">
            {/* COLUMNA PRINCIPAL */}
            <div className="footer-ravsoja__columna footer-ravsoja__principal">
              <a
                href="#inicio"
                className="footer-ravsoja__logo-enlace"
                aria-label="Volver al inicio"
              >
                <img
                  className="footer-ravsoja__logo-principal"
                  src={logoRavsoja}
                  alt="Consorcio Educativo RAVSOJA"
                />
              </a>

              <span className="footer-ravsoja__etiqueta">
                CONSORCIO EDUCATIVO
              </span>

              <h2>
                Educación que transforma
                <em>tu camino.</em>
              </h2>

              <p>
                Creamos experiencias de formación profesional para
                desarrollar conocimientos, habilidades y nuevas
                oportunidades.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-ravsoja__whatsapp"
              >
                <span className="footer-ravsoja__whatsapp-icono">
                  <WhatsAppIcon />
                </span>

                <span>
                  <small>Atención por WhatsApp</small>
                  <strong>961 598 7134</strong>
                </span>

                <FooterIcon type="arrow" />
              </a>
            </div>

            {/* NAVEGACIÓN */}
            <div className="footer-ravsoja__columna">
              <h3>Navegación</h3>

              <nav
                className="footer-ravsoja__enlaces"
                aria-label="Navegación del sitio"
              >
                <a href="/#inicio">Inicio</a>

                <a href="/oferta-educativa.html">Oferta educativa</a>

                <a href="/#instituciones">
                  Institutos
                </a>

                <a href="/#areas-formacion">
                  Áreas de formación
                </a>

                <a href="/#convenios">
                  Convenios
                </a>

                <a href="/#experiencias">
                  Experiencias
                </a>

                <a href="/#numeralia">
                  Numeralia
                </a>

                <a href="/#contacto">
                  Contacto
                </a>
              </nav>
            </div>

            {/* INSTITUTOS */}
            <div className="footer-ravsoja__columna">
              <h3>Nuestros institutos</h3>

              <nav
                className="footer-ravsoja__institutos"
                aria-label="Sitios de nuestros institutos"
              >
                {institutos.map((instituto) => (
                  <a
                    href={instituto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={instituto.nombre}
                    aria-label={`Visitar sitio de ${instituto.nombre}`}
                  >
                    <span className="footer-ravsoja__instituto-logo">
                      <img
                        src={instituto.logo}
                        alt={`Logo ${instituto.nombre}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>

                    <span>{instituto.nombre}</span>

                    <FooterIcon type="arrow" />
                  </a>
                ))}
              </nav>
            </div>

            {/* INFORMACIÓN */}
            <div className="footer-ravsoja__columna">
              <h3>Información</h3>

              <div className="footer-ravsoja__contactos">
                <a href={TELEFONO_URL}>
                  <span className="footer-ravsoja__contacto-icono">
                    <FooterIcon type="phone" />
                  </span>

                  <div>
                    <small>Teléfono</small>
                    <strong>961 690 8474</strong>
                  </div>
                </a>

                <a href={CORREO_URL}>
                  <span className="footer-ravsoja__contacto-icono">
                    <FooterIcon type="mail" />
                  </span>

                  <div>
                    <small>Correo electrónico</small>

                    <strong>
                      consorcioeducativoravsoja
                      <em>@ravsoja.org</em>
                    </strong>
                  </div>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footer-ravsoja__contacto-icono">
                    <FooterIcon type="map" />
                  </span>

                  <div>
                    <small>Ubicación</small>
                    <strong>Ver en Google Maps</strong>
                  </div>
                </a>

                <div className="footer-ravsoja__contacto-item">
                  <span className="footer-ravsoja__contacto-icono">
                    <FooterIcon type="clock" />
                  </span>

                  <div>
                    <small>Horario de atención</small>
                    <strong>
                      Lunes a sábado
                      <em>9:00 a. m. a 3:00 p. m.</em>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PARTE INFERIOR */}
          <div className="footer-ravsoja__inferior">
            <p>
              © {new Date().getFullYear()} Consorcio Educativo
              RAVSOJA. Todos los derechos reservados.
            </p>

            <div>
              <a href="/aviso-de-privacidad.html">
                Aviso de privacidad
              </a>

              <a href="/terminos-y-condiciones.html">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
