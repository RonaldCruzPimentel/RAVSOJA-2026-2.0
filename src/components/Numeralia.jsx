import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Numeralia.css";

/* Videos */
import acupunturaVideoMp4 from "../assets/videos/optimized/ACUPUNTURA.mp4";
import acupunturaVideoWebm from "../assets/videos/optimized/ACUPUNTURA.webm";
import regenerativaVideoMp4 from "../assets/videos/optimized/REGENERATIVA.mp4";
import regenerativaVideoWebm from "../assets/videos/optimized/REGENERATIVA.webm";
import tanatologiaVideoMp4 from "../assets/videos/optimized/TANATOLOGIA.mp4";
import tanatologiaVideoWebm from "../assets/videos/optimized/TANATOLOGIA.webm";

gsap.registerPlugin(ScrollTrigger);

const numeraliaData = [
  {
    id: "alumnos",
    area: "alumnos",
    number: 5200,
    suffix: "+",
    label: "Alumnos capacitados",
    description:
      "Personas que han fortalecido sus conocimientos y habilidades con nuestra oferta educativa.",
    videoMp4: acupunturaVideoMp4,
    videoWebm: acupunturaVideoWebm,
    index: "01",
    theme: "dark",
  },
  {
    id: "diplomados",
    area: "diplomados",
    number: 353,
    suffix: "+",
    label: "Diplomados impartidos",
    description: "Programas especializados en diferentes áreas de formación.",
    videoMp4: regenerativaVideoMp4,
    videoWebm: regenerativaVideoWebm,
    index: "02",
    theme: "blue",
  },
  {
    id: "generaciones",
    area: "generaciones",
    number: 6,
    suffix: "",
    label: "Generaciones graduadas",
    index: "03",
    theme: "light",
  },
  {
    id: "experiencia",
    area: "experiencia",
    number: 4,
    suffix: "",
    label: "Años de experiencia",
    index: "04",
    theme: "cream",
  },
  {
    id: "institutos",
    area: "institutos",
    number: 4,
    suffix: "",
    label: "Institutos",
    description:
      "CUETMX, INAFAM, Nicolás Maquiavelo y ANTARES forman parte de nuestra comunidad.",
    videoMp4: tanatologiaVideoMp4,
    videoWebm: tanatologiaVideoWebm,
    index: "05",
    theme: "video",
  },
  {
    id: "convenios",
    area: "convenios",
    number: 4,
    suffix: "",
    label: "Convenios",
    description:
      "Alianzas que fortalecen el desarrollo académico y profesional de nuestra comunidad.",
    index: "06",
    theme: "outline",
  },
];

function Numeralia() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const videosRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "160px 0px", threshold: 0.15 }
    );

    videosRef.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        countersRef.current.forEach((counter) => {
          if (!counter) return;

          const value = Number(counter.dataset.value);

          counter.textContent = new Intl.NumberFormat("es-MX").format(value);
        });

        return;
      }

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      introTimeline
        .from(".numeralia__eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".numeralia__title-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.95,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.45"
        )
        .from(
          ".numeralia__description",
          {
            opacity: 0,
            y: 25,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .from(
          ".numeralia__card",
          {
            opacity: 0,
            y: 65,
            scale: 0.96,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.45"
        );

      countersRef.current.forEach((counter, index) => {
        if (!counter) return;

        const targetValue = Number(counter.dataset.value);
        const counterState = { value: 0 };

        gsap.to(counterState, {
          value: targetValue,
          duration: targetValue > 100 ? 2.3 : 1.5,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            once: true,
          },
          onUpdate: () => {
            counter.textContent = new Intl.NumberFormat("es-MX").format(
              Math.round(counterState.value)
            );
          },
        });
      });

      gsap.to(".numeralia__background-shape--one", {
        yPercent: -25,
        rotate: 14,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".numeralia__background-shape--two", {
        yPercent: 22,
        rotate: -12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.utils.toArray(".numeralia__card-video").forEach((video) => {
        gsap.fromTo(
          video,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: video.closest(".numeralia__card"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className="numeralia"
      id="numeralia"
      ref={sectionRef}
      aria-labelledby="numeralia-title"
    >
      <div
        className="numeralia__background-shape numeralia__background-shape--one"
        aria-hidden="true"
      />

      <div
        className="numeralia__background-shape numeralia__background-shape--two"
        aria-hidden="true"
      />

      <div className="numeralia__pattern" aria-hidden="true" />

      <div className="numeralia__container">
        <header className="numeralia__header">
          <div className="numeralia__heading">
            <div className="numeralia__eyebrow">
              <span className="numeralia__eyebrow-line" />
              RAVSOJA EN CIFRAS
            </div>

            <h2 className="numeralia__title" id="numeralia-title">
              <span className="numeralia__title-mask">
                <span className="numeralia__title-line">
                  Nuestro camino
                </span>
              </span>

              <span className="numeralia__title-mask">
                <span className="numeralia__title-line numeralia__title-line--accent">
                  también se cuenta.
                </span>
              </span>
            </h2>
          </div>

          <div className="numeralia__description">
            <span className="numeralia__description-number">04</span>

            <p>
              Cuatro institutos unidos por una misma visión: impulsar el
              crecimiento académico, profesional y humano de nuestra
              comunidad.
            </p>
          </div>
        </header>

        <div className="numeralia__grid">
          {numeraliaData.map((item, index) => (
            <article
              className={`numeralia__card numeralia__card--${item.id} numeralia__card--${item.theme}`}
              style={{ gridArea: item.area }}
              key={item.id}
            >
              {item.videoMp4 && (
                <div className="numeralia__card-media" aria-hidden="true">
                  <video
                    className="numeralia__card-video"
                    ref={(element) => {
                      videosRef.current[index] = element;
                    }}
                    muted
                    loop
                    playsInline
                    preload="none"
                    tabIndex="-1"
                  >
                    <source src={item.videoWebm} type="video/webm" />
                    <source src={item.videoMp4} type="video/mp4" />
                  </video>

                  <div className="numeralia__card-video-overlay" />
                </div>
              )}

              <div className="numeralia__card-top">
                <span className="numeralia__card-index">{item.index}</span>

                <span className="numeralia__card-line" />
              </div>

              <div className="numeralia__card-content">
                <div
                  className="numeralia__number"
                  aria-label={`${item.number}${item.suffix}`}
                >
                  <span
                    ref={(element) => {
                      countersRef.current[index] = element;
                    }}
                    data-value={item.number}
                  >
                    {new Intl.NumberFormat("es-MX").format(item.number)}
                  </span>

                  {item.suffix && (
                    <span className="numeralia__number-suffix">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <h3 className="numeralia__card-title">{item.label}</h3>

                {item.description && (
                  <p className="numeralia__card-description">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="numeralia__card-decoration" aria-hidden="true">
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>

        <div className="numeralia__footer">
          <p>
            Educación que transforma conocimientos en nuevas oportunidades.
          </p>

          <div className="numeralia__footer-mark">
            <span />
            DÓNDE TÚ PERTENECES
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numeralia;
