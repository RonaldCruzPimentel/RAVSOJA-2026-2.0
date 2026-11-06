// Títulos transcritos de los mapas curriculares proporcionados por INAFAM.
const maps = {
 'tanatologia-integral': ['tanatologia-integral.pdf', 'materia', [
  'Bases de la tanatología','Tipos de duelo','Pérdidas simbólicas','Acompañamiento tanatológico','Tanatología humanista','Crecimiento post-pérdida','Tanatología en niños, jóvenes y adolescentes','Logoterapia y sentido de la vida','Tanatología aplicada a contextos clínicos y hospitalarios','Comunicación con personas en proceso terminal','Tanatología profesional, laboral y emprendimiento','Aspectos legales de la muerte'
 ]],
 'quimica': ['quimica-cosmetica.pdf', 'módulo', [
  'Introducción a la química cosmética','Formulación de productos cosméticos','Equipo de laboratorio cosmético','Operaciones fisicoquímicas para la elaboración y control de productos','Elaboración de productos cosméticos','Elaboración de jabón y champús con extractos de plantas','Elaboración de desodorantes en barra','Legislación y regulación en cosmética'
 ]],
 'heridas': ['heridas.pdf', 'módulo', [
  'Introducción y fundamentos','Abordaje integral al paciente con heridas','Terapia avanzada en curación de heridas','Abordaje de úlceras vasculares','Abordaje del paciente con pie diabético','Terapias regenerativas y biomateriales','Abordaje del paciente ostomizado','Legislación de la salud y permisos sanitarios'
 ]],
 'medicina-integrativa-estres': ['medicina-integrativa.pdf', 'módulo', [
  'Fisiopatología del estrés y regulación del eje HPA','Neuroendocrinología, sistema autónomo y epigenética','Cortisol, biomarcadores y evaluación endocrina','Cronobiología, sueño y recuperación neuroendocrina','Intestino-cerebro, microbiota e inmunidad','Neuroinflamación, metabolismo y enfermedad crónica','Tiroides y estrés: interacción neuroendocrino-metabólica','Salud hormonal femenina y masculina','Salud hormonal masculina, nutrición y modulación del estrés','Integración clínica, terapia hormonal y medicina de precisión','Aspectos médicos-legales'
 ]],
 'medicina-tiroidea': ['medicina-tiroidea.pdf', 'módulo', [
  'Fundamentos de endocrinología y fisiología tiroidea','Evaluación y diagnóstico de la función tiroidea','Hipotiroidismo y tiroiditis','Hipertiroidismo, tirotoxicosis y enfermedad de Graves','Nódulo tiroideo y cáncer de tiroides','Tiroides, embarazo, metabolismo y situaciones especiales','Glándulas paratiroides y metabolismo mineral','Hipófisis, hipotálamo y regulación neuroendocrina','Glándulas suprarrenales y eje del estrés','Endocrinología metabólica, reproductiva e integración clínica','Aspectos médicos-legales'
 ]],
 'enfermeria-estetica': ['enfermeria-estetica.pdf', 'módulo', [
  'Principios de enfermería en el campo estético','Técnicas faciales y corporales en enfermería estética','Toxina botulínica y ácido hialurónico','Recuperación postoperatoria','Técnicas de perfilamiento facial y corporal','Aparatología','Nutrición estética','Legislación de la salud y permisos sanitarios'
 ]],
 'ginecologia-endocrina': ['ginecologia-endocrina.pdf', 'módulo', [
  'Fundamentos de neuroendocrinología ginecológica','Bioquímica hormonal y genética','Alteraciones del ciclo menstrual','Síndrome de ovario poliquístico','Endocrinología de la reproducción','Anticoncepción hormonal','Endocrinología en adolescencia','Climaterio y menopausia','Endocrinometabolismo','Legislación de la salud y permisos sanitarios'
 ]],
}
export const inafamCurricula = Object.fromEntries(Object.entries(maps).map(([slug, [file, tipo, names]]) => [slug, {
  programPdf: `${import.meta.env.BASE_URL}catalogo/inafam/mapas/${file}`,
  curriculum: names.map((nombre, index) => ({ numero: String(index + 1).padStart(2, '0'), nombre, tipo })),
}]))
