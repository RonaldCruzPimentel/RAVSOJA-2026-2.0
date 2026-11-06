import { INSTITUTOS, PROGRAMAS, CONVOCATORIAS, WHATSAPP } from "../catalogo.js"
import { programasCatalogo } from "./programas.js"
import auxiliar from "./auxiliarMedicinaEstetica.js"
import { calendariosProgramas } from "./calendarios.js"
import { inafamPrograms } from "./inafam.js"
import { inafamCalendars } from "./inafam-calendarios.js"

export const institutions = INSTITUTOS.map((institution) => ({
  ...institution,
  shortName: institution.id === "nicolas" ? "Nicolás Maquiavelo" : institution.nombre,
}))
const byInstitution = Object.fromEntries(institutions.map((item) => [item.id, item]))
const covered = new Set(["cuetmx-cosmiatria", "cuetmx-podologia", "cuetmx-tricologia", "cuetmx-herbolaria"])

// Academic data belongs to the program; dated calendars belong to its generation.
export const programs = [
  ...programasCatalogo.map((source) => {
    const special = source.id === "auxiliar-medicina-estetica" ? auxiliar : null
    return {
      id: "cuetmx-" + source.id,
      institutionId: "cuetmx",
      title: source.title, shortTitle: source.shortTitle, abbreviation: source.abbreviation,
      category: source.category, description: special?.descripcionCompleta || source.description,
      image: source.image, modalImage: source.modalImage || source.image,
      duration: source.duration, modality: source.modality,
      audience: special?.dirigidoA || source.audience,
      curriculum: special?.mapaCurricular || source.curriculum.map((nombre, i) => ({ numero: String(i + 1).padStart(2, "0"), nombre })),
      teachers: special?.docentes || source.docentes || [],
      programPdf: source.programPdf,
      source: "CUETMX · catálogo original",
      salesVerified: false,
    }
  }),
  ...PROGRAMAS.filter((item) => !covered.has(item.id) && !inafamPrograms.some((program) => program.id === item.id)).map((item) => ({
    id: item.id, institutionId: item.instituto, title: item.nombre,
    shortTitle: item.nombre, abbreviation: item.nombre, category: item.tipo,
    description: item.descripcion || null, image: item.imagenUrl || null, modalImage: null,
    duration: null, modality: null, audience: null, curriculum: [], teachers: [],
    programPdf: item.temarioUrl || null, source: "RAVSOJA · catálogo existente",
    salesVerified: false,
  })),
  ...inafamPrograms,
  {
    id: "antares-community-manager", institutionId: "antares", title: "Community Manager",
    shortTitle: "Community Manager", abbreviation: "Community Manager", category: "Diplomado",
    description: null, image: null, modalImage: null, duration: null, modality: null,
    audience: null, curriculum: [], teachers: [], programPdf: null,
    source: "RAVSOJA · InstitutionsSection", salesVerified: false,
  },
]

export const convocations = [
  ...programasCatalogo.map((source) => ({
    id: "cuetmx-" + source.id + "-" + source.startDate,
    programId: "cuetmx-" + source.id, startDate: source.startDate, status: "publicada",
    calendar: source.id === "auxiliar-medicina-estetica" ? auxiliar.calendario : calendariosProgramas[source.id] || [],
    calendarPdf: source.calendarPdf || null,
    calendarImage: source.calendarDownload || null,
  })),
  ...inafamPrograms.map((program) => ({ id: program.id + "-" + program.startDate, programId: program.id, startDate: program.startDate, status: "publicada", calendar: inafamCalendars[program.id] || [], calendarPdf: null, calendarImage: null, calendarPending: !inafamCalendars[program.id] })),
  ...CONVOCATORIAS.map((source) => ({
    id: source.programaId + "-" + source.inicio,
    programId: source.programaId,
    startDate: source.estado === "confirmada" ? source.inicio : null,
    referenceDate: source.inicio, status: source.estado,
    calendar: [], calendarPdf: null, calendarImage: null,
  })),
]

export const normalizeSearch = (value = "") => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es")
export const monthKey = (date) => date ? date.slice(0, 7) : "pendiente"
export const monthLabel = (month) => month === "pendiente" ? "Fecha por confirmar" : new Intl.DateTimeFormat("es-MX", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(month + "-01T12:00:00Z"))
export const dateLabel = (date) => date ? new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date + "T12:00:00Z")) : "Fecha por confirmar"

export function makeListings(academicPrograms = programs, editions = convocations) {
  return academicPrograms.flatMap((program) => {
    const generations = editions.filter((item) => item.programId === program.id)
    return (generations.length ? generations : [{ id: program.id + "-pendiente", startDate: null, status: "pendiente", calendar: [] }]).map((edition) => {
      const institution = byInstitution[program.institutionId]
      const startLabel = dateLabel(edition.startDate)
      const message = `Hola, quiero información sobre ${program.category.toLowerCase()} ${program.title} de ${institution.nombre}, desde la oferta educativa de RAVSOJA.${edition.startDate ? " Inicio: " + startLabel + "." : ""}`
      return { ...program, ...edition, id: edition.id, programId: program.id, institution,
        image: program.image || institution.logo, fallbackImage: institution.logo,
        isLogoCover: !program.image, startLabel, month: monthKey(edition.startDate),
        whatsappUrl: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}` }
    })
  })
}
export const listings = makeListings()
export const months = [...new Set(listings.map((item) => item.month))].sort((a, b) => a === "pendiente" ? 1 : b === "pendiente" ? -1 : a.localeCompare(b))
export function filterListings(items, { institution = "todos", month = "todos", query = "", order = "fecha" } = {}) {
  const term = normalizeSearch(query.trim())
  return items.filter((item) =>
    (institution === "todos" || item.institutionId === institution) &&
    (month === "todos" || item.month === month) &&
    normalizeSearch(item.title + " " + item.shortTitle + " " + item.institution.nombre).includes(term)
  ).sort((a, b) => order === "az" ? a.title.localeCompare(b.title, "es") : (a.startDate || "9999").localeCompare(b.startDate || "9999") || a.title.localeCompare(b.title, "es"))
}
export const sortOptions = [{ value: "fecha", label: "Fecha de inicio" }, { value: "az", label: "A–Z" }]
