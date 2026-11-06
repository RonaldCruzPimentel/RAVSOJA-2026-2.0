import perfiles from './inafam-docentes.json'

// Las claves son identificadores internos; nunca se utilizan como etiquetas públicas.
const docentes = (keys) => keys.map((key, index) => ({ ...perfiles[key], numero: String(index + 1).padStart(2, '0'), sinFoto: true }))
const definitions = [
  ['tanatologia-integral', 'Tanatología Integral', '2026-11-07', '12 meses', 'Vespertino', '02/26', ['MTRO. RICARDO MONTOYA','DRA. YESSICA FLORES','MTRO. RENE ALCOCER']],
  ['quimica', 'Química Cosmética', '2026-11-28', '8 meses', 'Matutino', '03/26', ['MTRA. NAZARETH CAPISTRANO','MTRA. ANA PADILLA']],
  ['heridas', 'Manejo Avanzado y Curación de Heridas, Estomas, Quemaduras con Especialidad en Pie Diabético', '2026-12-12', '8 meses', 'Vespertino', '03/26', ['LIC. FRANKLIN BALBUENA','DRA. ADELINA PEREZ','DRA. KARINA GOMEZ']],
  ['medicina-integrativa-estres', 'Medicina Integrativa del Estrés, Regulación del Cortisol y Salud Hormonal', '2026-12-19', '10 meses', 'Matutino', '01/26', ['DRA. MARISOL CONTRERAS','DR. GERARDO TORANZO','DRA. NANCY RODRIGUEZ']],
  ['medicina-tiroidea', 'Medicina Tiroidea y Enfermedades Endocrinas', '2026-12-19', '10 meses', 'Matutino', '01/26', ['DRA. MARISOL CONTRERAS','DRA. NANCY RODRIGUEZ','DR. MANUEL CEDEÑO','DR. GERARDO TORANZO']],
  ['enfermeria-estetica', 'Enfermería Estética', '2027-01-09', '8 meses', 'Matutino', '01/27', ['MTRA. SELENE LOPEZ','MTRO. RENE ALCOCER','MTRA. ANDREA RAMIREZ','MTRA. NANCY RAMIREZ','LIC. ELVIA GARCIA','DRA. OLGA PANIAGUA','DRA. MICHELLE GOMEZ']],
  ['ginecologia-endocrina', 'Ginecología Endocrina', '2027-01-23', '10 meses', 'Vespertino', '01/27', ['DR. OMAR SANCHEZ','DR. JAVIER ROBLES','DRA. ROSALINDA GUADARRAMA','DR. BRIAN MACIA']],
  ['diabetologia', 'Diabetología', '2027-02-13', '10 meses', 'Matutino', '01/27', ['LIC. DIEGO YAÑEZ','MTRA. ANDREA RAMIREZ','DRA. DIANA LARA','DRA. OLGA PANIAGUA','DRA. DIANA MARTINEZ']],
  ['dermocosmiatria', 'Dermocosmiatría', '2027-02-27', '8 meses', 'Matutino', '01/27', ['MTRA. NANCY RAMIREZ','MTRA. SELENE LOPEZ','MTRA. CRISTEL ANTONIO','MTRO. RENE ALCOCER','MTRA. ANDREA RAMIREZ','DRA. MICHELLE GOMEZ','DRA. OLGA PANIAGUA','LIC. ELVIA GARCIA']],
]
export const inafamPrograms = definitions.map(([slug,title,startDate,duration,shift,generation,teachers]) => ({
  id: `inafam-${slug}`, institutionId: 'inafam', title, shortTitle: title, abbreviation: title,
  category: 'Diplomado', description: null, image: null, modalImage: null, duration, modality: 'En línea', shift,
  audience: null, curriculum: [], teachers: docentes(teachers), programPdf: null, source: 'INAFAM', salesVerified: false,
  startDate, generation,
}))
