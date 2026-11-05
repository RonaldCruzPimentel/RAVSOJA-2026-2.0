import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import "./InformacionContacto.css";

gsap.registerPlugin(ScrollTrigger);

const MAPS_URL = "https://maps.app.goo.gl/v4DzYRD1fJUiHHu88";
const WHATSAPP_URL = "https://wa.me/529615987134";
const TELEFONO_URL = "tel:+529616908474";
const CORREO = "consorcioeducativoravsoja@ravsoja.org";

function Icon({ type }) {
  const icons = { phone: Phone, mail: Mail, clock: Clock3, map: MapPin, arrow: ArrowUpRight, send: Send, whatsapp: MessageCircle };
  const Component = icons[type] || ArrowUpRight;
  return <Component aria-hidden="true" strokeWidth={1.8} />;
}

export default function InformacionContacto() {
  const sectionRef = useRef(null);
  const [mensajeEstado, setMensajeEstado] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from(".contacto-ravsoja__eyebrow", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".contacto-ravsoja__titulo", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".contacto-ravsoja__descripcion", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
        },
      });

      gsap.from(".contacto-card", {
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contacto-ravsoja__tarjetas",
          start: "top 82%",
        },
      });

      gsap.from(".contacto-ravsoja__mapa", {
        opacity: 0,
        x: -45,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contacto-ravsoja__contenido",
          start: "top 78%",
        },
      });

      gsap.from(".contacto-ravsoja__formulario", {
        opacity: 0,
        x: 45,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contacto-ravsoja__contenido",
          start: "top 78%",
        },
      });

      gsap.to(".contacto-ravsoja__orb--uno", {
        y: -35,
        x: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contacto-ravsoja__orb--dos", {
        y: 30,
        x: -18,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const enviarWhatsApp = (event) => {
    event.preventDefault();

    const formulario = new FormData(event.currentTarget);

    const nombre = formulario.get("nombre")?.trim();
    const telefono = formulario.get("telefono")?.trim();
    const correo = formulario.get("correo")?.trim();
    const instituto = formulario.get("instituto");
    const mensaje = formulario.get("mensaje")?.trim();

    if (!nombre || !telefono || !instituto || !mensaje) {
      setMensajeEstado(
        "Completa tu nombre, teléfono, instituto y mensaje."
      );
      return;
    }

    const textoWhatsApp = `
Hola, Consorcio Educativo RAVSOJA.

Mi nombre es ${nombre} y deseo solicitar información.

Instituto o área de interés: ${instituto}
Teléfono: ${telefono}
Correo: ${correo || "No proporcionado"}

Mensaje:
${mensaje}
    `.trim();

    const enlace = `${WHATSAPP_URL}?text=${encodeURIComponent(
      textoWhatsApp
    )}`;

    setMensajeEstado("Abriendo WhatsApp con tu información...");
    window.open(enlace, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="contacto-ravsoja"
      id="contacto"
      ref={sectionRef}
    >
      <div className="contacto-ravsoja__orb contacto-ravsoja__orb--uno" />
      <div className="contacto-ravsoja__orb contacto-ravsoja__orb--dos" />
      <div className="contacto-ravsoja__grid-fondo" />

      <div className="contacto-ravsoja__container">
        <header className="contacto-ravsoja__encabezado">
          <p className="contacto-ravsoja__eyebrow">
            INFORMACIÓN Y CONTACTO
          </p>

          <h2 className="contacto-ravsoja__titulo">
            Tu siguiente paso comienza
            <span> hablando con nosotros.</span>
          </h2>

          <p className="contacto-ravsoja__descripcion">
            Nuestro equipo está preparado para orientarte sobre nuestra
            oferta educativa, procesos de inscripción, modalidades y
            próximas fechas de inicio.
          </p>
        </header>

        <div className="contacto-ravsoja__tarjetas">
          <a
            className="contacto-card contacto-card--destacada"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contacto-card__icono">
              <Icon type="whatsapp" />
            </span>

            <span className="contacto-card__contenido">
              <small>WhatsApp</small>
              <strong>961 598 7134</strong>
              <span>Respuesta directa de nuestro equipo</span>
            </span>

            <span className="contacto-card__flecha">
              <Icon type="arrow" />
            </span>
          </a>

          <a className="contacto-card" href={TELEFONO_URL}>
            <span className="contacto-card__icono">
              <Icon type="phone" />
            </span>

            <span className="contacto-card__contenido">
              <small>Teléfono</small>
              <strong>961 690 8474</strong>
              <span>Llámanos para recibir orientación</span>
            </span>
          </a>

          <a
            className="contacto-card contacto-card--correo"
            href={`mailto:${CORREO}`}
          >
            <span className="contacto-card__icono">
              <Icon type="mail" />
            </span>

            <span className="contacto-card__contenido">
              <small>Correo electrónico</small>
              <strong className="contacto-card__correo">
                consorcioeducativoravsoja
                <span>@ravsoja.org</span>
              </strong>
              <span>Escríbenos en cualquier momento</span>
            </span>
          </a>

          <article className="contacto-card">
            <span className="contacto-card__icono">
              <Icon type="clock" />
            </span>

            <span className="contacto-card__contenido">
              <small>Horario de atención</small>
              <strong>Lunes a sábado</strong>
              <span>9:00 a. m. a 3:00 p. m.</span>
              <span>Domingo: no se labora</span>
            </span>
          </article>
        </div>

        <div className="contacto-ravsoja__contenido">
          <article className="contacto-ravsoja__mapa">
            <div className="contacto-ravsoja__mapa-visual">
              <iframe
                title="Ubicación de Consorcio Educativo RAVSOJA"
                src="https://www.google.com/maps?q=16.7556736,-93.1158884&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contacto-ravsoja__mapa-info">
              <div className="contacto-ravsoja__mapa-icono">
                <Icon type="map" />
              </div>

              <div>
                <span>Visítanos</span>
                <h3>Consorcio Educativo RAVSOJA</h3>
                <p>Consulta la ruta y las indicaciones en Google Maps.</p>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir ubicación en Google Maps"
              >
                <Icon type="arrow" />
              </a>
            </div>
          </article>

          <article className="contacto-ravsoja__formulario">
            <div className="contacto-ravsoja__formulario-header">
              <span>CONTACTO DIRECTO</span>
              <h3>Solicita información</h3>
              <p>
                Completa tus datos y enviaremos tu solicitud directamente
                por WhatsApp.
              </p>
            </div>

            <form onSubmit={enviarWhatsApp}>
              <div className="contacto-ravsoja__fila">
                <label>
                  <span>Nombre completo *</span>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Teléfono *</span>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="961 000 0000"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Correo electrónico</span>
                <input
                  type="email"
                  name="correo"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                />
              </label>

              <label>
                <span>Instituto o área de interés *</span>

                <select name="instituto" defaultValue="" required>
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="CUETMX">CUETMX</option>
                  <option value="INAFAM">INAFAM</option>
                  <option value="Instituto Nicolás Maquiavelo">
                    Instituto Nicolás Maquiavelo
                  </option>
                  <option value="ANTARES">ANTARES</option>
                  <option value="Información general de RAVSOJA">
                    Información general de RAVSOJA
                  </option>
                </select>
              </label>

              <label>
                <span>¿En qué podemos ayudarte? *</span>
                <textarea
                  name="mensaje"
                  rows="5"
                  placeholder="Cuéntanos qué diplomado, taller o servicio te interesa..."
                  required
                />
              </label>

              <button
                className="contacto-ravsoja__boton"
                type="submit"
              >
                <span>Enviar solicitud por WhatsApp</span>

                <span className="contacto-ravsoja__boton-icono">
                  <Icon type="send" />
                </span>
              </button>

              <p className="contacto-ravsoja__privacidad">
                Al enviar aceptas el tratamiento de tus datos conforme al <a href="/aviso-de-privacidad.html">aviso de privacidad</a>.
              </p>

              {mensajeEstado && (
                <p
                  className="contacto-ravsoja__estado"
                  aria-live="polite"
                >
                  {mensajeEstado}
                </p>
              )}
            </form>
          </article>
        </div>

      </div>
    </section>
  );
}
