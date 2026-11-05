import { ArrowRight, CalendarDays } from "lucide-react"
import { programasCatalogo } from "../data/catalogo/programas"
import "./ConversionSections.css"

const programasDestacados = [...programasCatalogo]
  .sort((a, b) => a.startDate.localeCompare(b.startDate))
  .slice(0, 5)

export default function FeaturedPrograms() {
  return (
    <section className="featured-programs" id="programas-destacados" aria-labelledby="featured-title">
      <div className="featured-programs__container">
        <header className="featured-programs__heading">
          <h2 id="featured-title">Una formación para cada siguiente paso.</h2>
          <p>
            Conoce una selección de los diplomados disponibles en CUETMX y consulta el catálogo para ver sus detalles.
          </p>
          <a href={import.meta.env.BASE_URL + "oferta-educativa.html"}>
            Ver catálogo completo
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </a>
        </header>

        <div className="featured-programs__grid">
          {programasDestacados.map((programa, index) => (
            <article
              className={`featured-program${index === 0 ? " featured-program--main" : ""}`}
              key={programa.id}
            >
              <a href={`${import.meta.env.BASE_URL}oferta-educativa.html?programa=${programa.id}`} aria-label={`Conocer ${programa.title}`}>
                <img src={programa.image} alt={`Portada de ${programa.title}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                <div className="featured-program__body">
                  <div className="featured-program__meta">
                    <span>{programa.area}</span>
                    <span>{programa.modality}</span>
                  </div>
                  <h3>{programa.shortTitle}</h3>
                  <p>{programa.description}</p>
                  <div className="featured-program__footer">
                    <span><CalendarDays aria-hidden="true" size={16} /> {programa.startLabel}</span>
                    <span>Ver programa <ArrowRight aria-hidden="true" size={16} /></span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
