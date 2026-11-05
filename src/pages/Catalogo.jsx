import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, ChevronDown } from "lucide-react";
import ProgramaCard from "../components/oferta/ProgramaCard";
import ProgramaModal from "../components/oferta/ProgramaModal";
import Navbar from "../components/layout/Navbar"
import { institutions, listings, months, monthLabel, filterListings, sortOptions as opcionesOrdenCatalogo } from "../data/catalogo/model.js"
import "./Catalogo.css"
import "./CatalogoVisual.css"
import "../components/oferta/ProgramaModal.css"


export default function Catalogo() {
  const [institution, setInstitution] = useState("todos");
  const [month, setMonth] = useState("todos");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("instituto");
  const [order, setOrder] = useState("fecha");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const sortRef = useRef(null);
  const sortTriggerRef = useRef(null);
  const sortOptionRefs = useRef([]);
  const catalogRef = useRef(null);
  const programs = useMemo(() => filterListings(listings, { institution, month, query, order }), [institution, month, query, order]);
  const closeProgram = useCallback(() => setSelectedProgram(null), []);
  const resetFilters = () => { setInstitution("todos"); setMonth("todos"); setQuery("") };
  const groups = view === "instituto"
    ? institutions.map((item) => ({ id: item.id, title: item.nombre, logo: item.logo, items: programs.filter((program) => program.institutionId === item.id) })).filter((group) => group.items.length)
    : months.map((item) => ({ id: item, title: monthLabel(item), items: programs.filter((program) => program.month === item) })).filter((group) => group.items.length);

  const selectedOrder = opcionesOrdenCatalogo.find((option) => option.value === order);

  // Presentation only: filters retain priority over the institute in view.
  useEffect(() => {
    const catalog = catalogRef.current;
    if (!catalog) return;
    catalog.dataset.activeInstitute = institution;
    if (institution !== "todos" || view !== "instituto") return;
    const sections = [...catalog.querySelectorAll('.rv-offer-group[data-institute]')];
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      const current = sections.find((section) => visible.has(section));
      catalog.dataset.activeInstitute = current?.dataset.institute || "todos";
    }, { rootMargin: "-18% 0px -45% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [institution, view, programs]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!sortRef.current?.contains(event.target)) setSortOpen(false);
    };

    const closeOnEscape = (event) => {
      if (event.key !== "Escape" || !sortOpen) return;

      setSortOpen(false);
      sortTriggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [sortOpen]);

  useEffect(() => {
    if (!sortOpen) return;

    const selectedIndex = opcionesOrdenCatalogo.findIndex(
      (option) => option.value === order
    );
    sortOptionRefs.current[selectedIndex]?.focus();
  }, [sortOpen, order]);

  const selectOrder = (value) => {
    setOrder(value);
    setSortOpen(false);
    sortTriggerRef.current?.focus();
  };

  const handleOptionKeyDown = (event, index) => {
    const lastIndex = opcionesOrdenCatalogo.length - 1;
    let nextIndex;

    if (event.key === "ArrowDown") nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === "ArrowUp") nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    sortOptionRefs.current[nextIndex]?.focus();
  };

  return (
    <>
    <a className="skip-link" href="#contenido-catalogo">Saltar al catálogo</a>
    <Navbar />
    <main ref={catalogRef} id="contenido-catalogo" className="rv-offer-catalog" aria-labelledby="catalog-title">
      <div className="rv-offer-atmosphere" aria-hidden="true"><div className="rv-offer-atmosphere__flow" /></div>
      <div className="rv-offer-catalog__container">
        <a className="rv-offer-catalog__back" href="/#inicio">
          <ArrowLeft aria-hidden="true" /> Volver a RAVSOJA
        </a>

        <header className="rv-offer-catalog__header">
          <div>
            <p className="rv-offer-offer__eyebrow">RAVSOJA · CUATRO INSTITUTOS, UNA VISIÓN</p>
            <h1 id="catalog-title">Oferta educativa <span>completa</span></h1>
            <p>
              Explora diplomados y talleres por instituto y mes de inicio. Consulta la información, el mapa curricular, los docentes y el calendario de cada programa.
            </p>
          </div>

          <div className="rv-offer-catalog__sort" ref={sortRef}>
            <span id="catalog-sort-label">Ordenar por</span>
            <button
              ref={sortTriggerRef}
              type="button"
              className={`rv-offer-catalog__sort-trigger${sortOpen ? " is-open" : ""}`}
              aria-labelledby="catalog-sort-label catalog-sort-value"
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              aria-controls="catalog-sort-menu"
              onClick={() => setSortOpen((current) => !current)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                event.preventDefault();
                setSortOpen(true);
              }}
            >
              <span id="catalog-sort-value">{selectedOrder?.label}</span>
              <ChevronDown aria-hidden="true" />
            </button>

            {sortOpen && (
              <div
                id="catalog-sort-menu"
                className="rv-offer-catalog__sort-menu"
                role="listbox"
                aria-labelledby="catalog-sort-label"
              >
                {opcionesOrdenCatalogo.map((option, index) => (
                  <button
                    key={option.value}
                    ref={(element) => {
                      sortOptionRefs.current[index] = element;
                    }}
                    type="button"
                    role="option"
                    aria-selected={option.value === order}
                    className="rv-offer-catalog__sort-option"
                    onClick={() => selectOrder(option.value)}
                    onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  >
                    <span>{option.label}</span>
                    {option.value === order && <Check aria-hidden="true" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="rv-offer-filters">
          <div className="rv-offer-institutions" role="group" aria-label="Filtrar por instituto">
            <button type="button" aria-pressed={institution === "todos"} onClick={() => setInstitution("todos")}>Todos los institutos</button>
            {institutions.map((item) => <button type="button" key={item.id} aria-pressed={institution === item.id} onClick={() => setInstitution(item.id)} style={{ "--institution-accent": item.color }}><img src={item.logo} alt="" /><span>{item.shortName}</span></button>)}
          </div>
          <div className="rv-offer-filter-row">
            <label>Buscar programa<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre del diplomado o taller" /></label>
            <label>Mes de inicio<select value={month} onChange={(event) => setMonth(event.target.value)}><option value="todos">Todos los meses</option>{months.map((item) => <option key={item} value={item}>{monthLabel(item)}</option>)}</select></label>
            <div className="rv-offer-view" role="group" aria-label="Organizar catálogo"><button type="button" aria-pressed={view === "instituto"} onClick={() => setView("instituto")}>Por instituto</button><button type="button" aria-pressed={view === "mes"} onClick={() => setView("mes")}>Por mes</button></div>
          </div>
        </div>
        <div className="rv-offer-catalog__summary" aria-live="polite">
          <span>{programs.length} {programs.length === 1 ? "programa" : "programas"}</span>
          <span>{month === "todos" ? "Convocatorias publicadas y fechas por confirmar" : monthLabel(month)}</span>
        </div>

        {(institution !== "todos" || month !== "todos" || query) && <button type="button" className="rv-offer-reset" onClick={resetFilters}>Limpiar filtros</button>}
        {groups.length ? groups.map((group) => <section className="rv-offer-group" data-institute={view === "instituto" ? group.id : undefined} key={group.id} aria-labelledby={`group-${group.id}`}>
          <header className="rv-offer-group__heading">{group.logo && <img src={group.logo} alt="" />}<h2 id={`group-${group.id}`}>{group.title}</h2><span>{group.items.length}</span></header>
          <div className="rv-offer-catalog__grid">{group.items.map((program) => <ProgramaCard key={program.id} programa={program} onOpen={setSelectedProgram} />)}</div>
        </section>) : <div className="rv-offer-program-placeholder"><h2>No encontramos programas</h2><p>Prueba otro instituto, mes o nombre.</p><button type="button" className="rv-offer-reset" onClick={resetFilters}>Ver todos los programas</button></div>}
      </div>

      {selectedProgram && <ProgramaModal key={selectedProgram.id} program={selectedProgram} onClose={closeProgram} />}
    </main>
    </>
  );
}
