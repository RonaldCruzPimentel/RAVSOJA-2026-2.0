/**
 * RAVSOJA — Datos iniciales del catálogo.
 * Revisa nombres y convocatorias con Admisiones antes de publicar.
 * No declares una fecha como confirmada hasta verificarla.
 *
 * Para agregar un programa: agrega un objeto a PROGRAMAS.
 * Para agregar otra generación del mismo programa: agrega otra entrada a CONVOCATORIAS.
 */

import cuetmxLogo from '../assets/logos/cuetmx-logo.webp'
import inafamLogo from '../assets/logos/inafam-logo.webp'
import antaresLogo from '../assets/logos/antares-logo.webp'
import nicolasLogo from '../assets/logos/nicolas-logo.webp'

export const INSTITUTOS = [
  { id: 'cuetmx', nombre: 'CUETMX', descripcion: 'Belleza, bienestar y especialidades terapéuticas', color: '#551d26', logo: cuetmxLogo },
  { id: 'inafam', nombre: 'INAFAM', descripcion: 'Ciencias de la salud y actualización profesional', color: '#114f5e', logo: inafamLogo },
  { id: 'antares', nombre: 'ANTARES', descripcion: 'Desarrollo empresarial y humano', color: '#432153', logo: antaresLogo },
  { id: 'nicolas', nombre: 'Academia Nicolás Maquiavelo', descripcion: 'Formación y actualización jurídica', color: '#212950', logo: nicolasLogo },
]

// Nombres recopilados de la oferta de referencia; validar que todos sigan activos.
// descripcion, temarioUrl e imagenUrl se pueden agregar a cada objeto.
export const PROGRAMAS = [
  { id: 'cuetmx-cosmiatria', instituto: 'cuetmx', nombre: 'Cosmiatría Facial y Corporal Avanzado', tipo: 'Diplomado' },
  { id: 'cuetmx-spa', instituto: 'cuetmx', nombre: 'Técnicas de SPA', tipo: 'Programa' },
  { id: 'cuetmx-podologia', instituto: 'cuetmx', nombre: 'Podología', tipo: 'Diplomado' },
  { id: 'cuetmx-plasma-pen', instituto: 'cuetmx', nombre: 'Plasma Pen', tipo: 'Programa' },
  { id: 'cuetmx-tricologia', instituto: 'cuetmx', nombre: 'Tricología Clínica e Injerto Capilar', tipo: 'Diplomado' },
  { id: 'cuetmx-herbolaria', instituto: 'cuetmx', nombre: 'Herbolaria y Homeopatía', tipo: 'Diplomado' },
  { id: 'cuetmx-limpieza-facial', instituto: 'cuetmx', nombre: 'Limpieza Facial Profunda', tipo: 'Programa' },
  { id: 'inafam-ginecologia', instituto: 'inafam', nombre: 'Ginecología Estética', tipo: 'Diplomado' },
  { id: 'inafam-quimica', instituto: 'inafam', nombre: 'Química Cosmética', tipo: 'Diplomado' },
  { id: 'inafam-heridas', instituto: 'inafam', nombre: 'Heridas, Estomas y Pie Diabético', tipo: 'Diplomado' },
  { id: 'inafam-oncocosmiatria', instituto: 'inafam', nombre: 'Oncocosmiatría', tipo: 'Diplomado' },
  { id: 'inafam-enfermeria-estetica', instituto: 'inafam', nombre: 'Enfermería Estética', tipo: 'Diplomado' },
  { id: 'inafam-celulas-madre', instituto: 'inafam', nombre: 'Medicina Regenerativa y Células Madre', tipo: 'Diplomado' },
  { id: 'inafam-dermocosmiatria', instituto: 'inafam', nombre: 'Dermocosmiatría', tipo: 'Diplomado' },
  { id: 'inafam-farmacologia', instituto: 'inafam', nombre: 'Farmacología Intrahospitalaria', tipo: 'Diplomado' },
  { id: 'inafam-patologia', instituto: 'inafam', nombre: 'Patología Mamaria', tipo: 'Diplomado' },
  { id: 'inafam-envejecimiento', instituto: 'inafam', nombre: 'Envejecimiento Saludable y Hormonas Bioidénticas', tipo: 'Diplomado' },
  { id: 'inafam-terapias-celulares', instituto: 'inafam', nombre: 'Terapias Celulares Avanzadas y Medicina Regenerativa', tipo: 'Diplomado' },
  { id: 'antares-direccion', instituto: 'antares', nombre: 'Alta Dirección y Liderazgo Efectivo', tipo: 'Diplomado' },
  { id: 'antares-psicologia', instituto: 'antares', nombre: 'Psicología Organizacional', tipo: 'Diplomado' },
  { id: 'antares-ventas', instituto: 'antares', nombre: 'Ventas Estratégicas', tipo: 'Diplomado' },
  { id: 'antares-administracion', instituto: 'antares', nombre: 'Administración y Contabilidad para PYMES', tipo: 'Diplomado' },
  { id: 'antares-psicoterapia', instituto: 'antares', nombre: 'Psicoterapia y Productividad Empresarial', tipo: 'Programa' },
  { id: 'antares-diseno-educativo', instituto: 'antares', nombre: 'Diseño Educativo y Formación para el Trabajo', tipo: 'Programa' },
  { id: 'antares-talleres-pedagogicos', instituto: 'antares', nombre: 'Talleres pedagógicos', tipo: 'Taller' },
  { id: 'nicolas-sanitario', instituto: 'nicolas', nombre: 'Derecho Sanitario', tipo: 'Diplomado' },
  { id: 'nicolas-responsabilidad', instituto: 'nicolas', nombre: 'Responsabilidad Profesional Médica', tipo: 'Taller' },
  { id: 'nicolas-cnpcf', instituto: 'nicolas', nombre: 'Código Nacional de Procedimientos Civiles y Familiares', tipo: 'Programa' },
  { id: 'nicolas-medios-probatorios', instituto: 'nicolas', nombre: 'Medios Probatorios', tipo: 'Programa' },
  { id: 'nicolas-nom046', instituto: 'nicolas', nombre: 'NOM-046', tipo: 'Programa' },
]

/**
 * Una convocatoria = una fecha de inicio de un programa.
 * Ejemplo para agregar otra edición:
 * { programaId: 'cuetmx-podologia', inicio: '2027-01-16', estado: 'confirmada' }
 *
 * 'referencia' = fecha histórica/de trabajo, todavía no validada para publicación.
 * 'confirmada' = fecha revisada contra la programación oficial.
 */
export const CONVOCATORIAS = [
  { programaId: 'inafam-patologia', inicio: '2026-10-24', estado: 'referencia' },
  { programaId: 'inafam-envejecimiento', inicio: '2026-10-24', estado: 'referencia' },
  { programaId: 'inafam-terapias-celulares', inicio: '2026-12-19', estado: 'referencia' },
]

export const WHATSAPP = '529615987134'
