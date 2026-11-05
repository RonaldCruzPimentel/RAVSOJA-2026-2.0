import { ArrowUpRight } from "lucide-react";

function ProgramaCard({ programa, onOpen }) {
  return (
    <article className="rv-offer-program-card" data-institute={programa.institutionId} data-logo-cover={programa.isLogoCover || undefined} style={{ "--institution-accent": programa.institution.color }}>

      {/* =====================================================
          IMAGEN
      ===================================================== */}

      <button
        type="button"
        className="rv-offer-program-card__media"
        onClick={() => onOpen(programa)}
        aria-label={`Ver información de ${programa.title}`}
      >
        <img
          src={programa.image}
          alt={programa.title}
          className={`rv-offer-program-card__image${programa.isLogoCover ? " is-logo" : ""}`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            if (programa.fallbackImage && event.currentTarget.src !== new URL(programa.fallbackImage, window.location.origin).href) {
              event.currentTarget.src = programa.fallbackImage;
            }
          }}
        />

        <div className="rv-offer-program-card__image-overlay" />

        <div className="rv-offer-program-card__top">
          <span className="rv-offer-program-card__category">
            {programa.shortTitle}
          </span>

          <span className="rv-offer-program-card__duration">
            {programa.duration || "Duración por confirmar"}
          </span>
        </div>

      </button>


      {/* =====================================================
          INFORMACIÓN
      ===================================================== */}

      <div className="rv-offer-program-card__body">

        <div className="rv-offer-program-card__heading">
          <div>
            <p className="rv-offer-program-card__mini-label">
              {programa.category}
            </p>

            <h3>
              {programa.abbreviation}
            </h3>
          </div>

        </div>


        {/* FECHA */}

        <div className="rv-offer-program-card__meta">
          <span className="rv-offer-program-card__badge">
            <img src={programa.institution.logo} alt="" />{programa.institution.shortName}
          </span>

          <div className="rv-offer-program-card__date">
            <span className="rv-offer-program-card__date-dot" />
            <span>INICIO</span>

            <strong>{programa.startLabel.toUpperCase()}</strong>
          </div>
        </div>


        <div className="rv-offer-program-card__divider" />


        {/* FOOTER */}

        <div className="rv-offer-program-card__footer">

          <div className="rv-offer-program-card__modality">
            <span>
              MODALIDAD
            </span>

            <strong>
              {programa.modality || "Por confirmar"}
            </strong>
          </div>


          <button
            type="button"
            className="rv-offer-program-card__button"
            onClick={() => onOpen(programa)}
            aria-label={`Ver información de ${programa.title}`}
          >
            <span>
              Ver programa
            </span>

            <span
              className="rv-offer-program-card__button-icon"
              aria-hidden="true"
            >
              <ArrowUpRight size={16} />
            </span>
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProgramaCard;
