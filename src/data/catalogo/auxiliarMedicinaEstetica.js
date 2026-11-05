const auxiliarMedicinaEstetica = {
  id: "aux-med-est",

  categoria: "MEDICINA ESTÉTICA",

  nombre: "Auxiliar en Medicina Estética",

  abreviacion: "AUX MED EST",

  fechaInicio: "15 DE AGOSTO 2026",

  duracion: "12 MESES",

  modalidad: "PRESENCIAL / EN LÍNEA",

  imagen:
    (import.meta.env.BASE_URL + "catalogo/cuetmx/auxmedest.jpg"),

  pdfMapa:
    (import.meta.env.BASE_URL + "catalogo/cuetmx/programas/mapa-curricular-aux-med-est.pdf"),

  pdfCalendario:
    (import.meta.env.BASE_URL + "catalogo/cuetmx/calendarios/calendario-aux-med-est.pdf"),

  descripcionCompleta:
    "El Diplomado Auxiliar en Medicina Estética está diseñado para brindar una formación integral en conocimientos, procedimientos y herramientas relacionadas con la asistencia dentro del área de la medicina estética.",

  dirigidoA:
    "Personas interesadas en desarrollar competencias profesionales dentro del sector estético y complementar su preparación mediante formación especializada.",

  mapaCurricular: [
    {
      numero: "01",
      nombre: "Introducción a la Medicina Estética",
    },
    {
      numero: "02",
      nombre: "Nutrición Estética",
    },
    {
      numero: "03",
      nombre: "Medicina Estética",
    },
    {
      numero: "04",
      nombre:
        "Legislación de la Salud y Permisos Sanitarios",
    },
  ],

  docentes: [
    {
      numero: "01",

      nombre:
        "Dra. Michelle Grace Gomez Barrientos",

      nombreCorto:
        "Dra. Michelle Gómez",

      foto:
        (import.meta.env.BASE_URL + "catalogo/cuetmx/docentes/michelle.jpeg"),

      resumen:
        "Médico Cirujano · Cirugía Estética · Naturoterapia",

      formacion: [
        {
          titulo: "Licenciaturas",
          texto:
            "Licenciatura en Naturoterapia por la Escuela de Medicina Alternativa (2010-2015) y Licenciatura como Médico Cirujano por la Universidad Autónoma de Chiapas (2012-2020).",
        },
        {
          titulo: "Maestría",
          texto:
            "Maestría en Cirugía Estética por el Instituto de Estudios Superior en Medicina (2021-2023).",
        },
        {
          titulo: "Doctorado",
          texto: "No aplica.",
        },
        {
          titulo: "Especialidad",
          texto:
            "Cirugía Estética y Naturoterapia.",
        },
      ],

      experiencia: [
        "Doble formación en salud, médica general y medicina alternativa, con alta especialización quirúrgica estética.",
        "Experiencia docente previa en la enseñanza de ciencias biológicas a nivel medio superior.",
      ],
    },

    {
      numero: "02",

      nombre:
        "Dra. Olga Castro Paniagua",

      nombreCorto:
        "Dra. Olga Castro",

      foto:
        (import.meta.env.BASE_URL + "catalogo/cuetmx/docentes/olga.jpeg"),

      resumen:
        "Médico Cirujano · Medicina del Trabajo · Medicina Estética",

      formacion: [
        {
          titulo: "Licenciatura",
          texto:
            "Médico Cirujano por la Universidad Nacional Autónoma de México, UNAM FES Iztacala.",
        },
        {
          titulo: "Maestría",
          texto:
            "Maestría en Seguridad e Higiene Ocupacional emitida por la Secretaría del Trabajo y Previsión Social (STPS) del Estado de México.",
        },
        {
          titulo: "Especialidad y diplomados",
          texto:
            "Formación avanzada en Medicina del Trabajo por la UNAM, Nutrición y Salud Emocional, Tanatología Gestalt, Alta Especialización en Medicina Interna por la Universidad La Salle, Certificación Profesional en Medicina General, certificación en Medicina Estética y Dermocosmiatría.",
        },
      ],

      experiencia: [
        "Más de 18 o 26 años de distinguida trayectoria en corporativos nacionales y transnacionales administrando servicios médicos integrales.",
        "Lideró el diseño e implementación del protocolo nacional frente a la pandemia de COVID-19 y la ejecución integral de la norma federal NOM-035-STPS-2018 a nivel nacional en Bio Pappel.",
        "Amplia experiencia docente en instituciones formativas como la Cruz Roja Mexicana, en la escuela de TUMs, y como conferencista en salud preventiva empresarial.",
      ],
    },

    {
      numero: "03",

      nombre:
        "Mtra. Nancy Julia Ramírez Mañón",

      nombreCorto:
        "Mtra. Nancy Ramírez",

      foto:
        (import.meta.env.BASE_URL + "catalogo/cuetmx/docentes/nancy.jpeg"),

      resumen:
        "Acupuntura Humana Rehabilitatoria · Dirección de Organizaciones de Salud",

      formacion: [
        {
          titulo: "Licenciatura",
          texto:
            "Acupuntura Humana Rehabilitatoria.",
        },
        {
          titulo: "Maestría",
          texto:
            "Dirección de Organizaciones de Salud.",
        },
      ],

      experiencia: [
        "Docente en el Instituto de Medicina Estética y Regenerativa JMedical, impartiendo asignaturas de Cosmeatría facial y corporal, Anatomía general, Anatomía y fisiología muscular y del sistema tegumentario.",
        "Docente de Cosmeatría, Medicina Tradicional China y Herbolaria en la Escuela Latinoamericana de Salud Integral (ELAESI), además encargada de la planeación de talleres y diplomados.",
      ],
    },

    {
      numero: "04",

      nombre:
        "Lic. Julia Eugenia Mazuera Toro",

      nombreCorto:
        "Lic. Julia Mazuera",

      foto:
        (import.meta.env.BASE_URL + "catalogo/cuetmx/docentes/julia.jpeg"),

      resumen:
        "Bacteriología · Bioanálisis · Estética y Cosmetología",

      formacion: [
        {
          titulo: "Formación académica",
          texto:
            "Licenciatura en Bacteriología y Laboratorio Clínico, con énfasis en microbiología de alimentos; Licenciatura en Bioanálisis y formación Técnica en Estética y Cosmetología.",
        },
        {
          titulo:
            "Diplomados y especialidades",
          texto:
            "Gestión de Calidad en Salud, Gerencia de Seguridad y Salud Ocupacional, Dermocosmiatría Avanzada, Nutrición Ortomolecular, Longevidad y Fluidoterapia.",
        },
      ],

      experiencia: [
        "Docente en los Diplomados de Medicina Regenerativa y Células Madre, y Química Cosmética en las instituciones CUETMX e INAFAM.",
      ],
    },

    {
      numero: "05",

      nombre:
        "Lic. Elvia Mercedes García Redondo",

      nombreCorto:
        "Lic. Elvia García",

      foto:
        (import.meta.env.BASE_URL + "catalogo/cuetmx/docentes/elvia-garcia.jpeg"),

      resumen:
        "Cosmiatría · Micropigmentación · Maquillaje Profesional",

      formacion: [
        {
          titulo: "Formación académica",
          texto:
            "Licenciatura en Cosmiatría.",
        },
        {
          titulo:
            "Diplomados y especialidades",
          texto:
            "Cosmiatría, Micropigmentación, Maquillaje Profesional y Auxiliar de Laboratorio.",
        },
      ],

      experiencia: [
        "Profesora en los Diplomados de Micropigmentación, Cosmiatría, Cosmetología y Dermocosmiatría.",
      ],
    },

    {
      numero: "06",

      nombre:
        "Mtra. Andrea Estefany Ramírez Nieves",

      nombreCorto:
        "Mtra. Andrea Ramírez",

      resumen:
        "Nutrición Humana · Educación y Docencia",

      formacion: [
        {
          titulo: "Licenciatura",
          texto:
            "Nutrición Humana.",
        },
        {
          titulo: "Maestría",
          texto:
            "Maestría en Educación y Docencia (en curso).",
        },
        {
          titulo: "Diplomados",
          texto:
            "Nutrición Clínica, Salud Pública, Nutrición y Suplementación, y Nutrición en la Enfermedad Renal.",
        },
      ],

      experiencia: [
        "Docente de Licenciatura en la Universidad Vizcaya de las Américas, impartiendo asignaturas en la carrera de Nutrición.",
        "Docente de módulos en diplomados médicos y especialidades en el Centro Universitario de Especialidades Terapéuticas de México.",
        "Docente de diplomado con el Grupo SOLHER - IBERO.",
      ],
    },
  ],

  calendario: [
    {
      mes: "AGOSTO",
      anio: "2026",
      pago: "10 AL 14",
      clases: [
        {
          dia: "15",
          tema:
            "Introducción a la Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "SEPTIEMBRE",
      anio: "2026",
      pago: "14 AL 18",
      clases: [
        {
          dia: "05",
          tema:
            "Introducción a la Medicina Estética",
        },
        {
          dia: "19",
          tema:
            "Legislación de la Salud y Permisos Sanitarios",
        },
      ],
      sello: true,
    },

    {
      mes: "OCTUBRE",
      anio: "2026",
      pago: "12 AL 16",
      clases: [
        {
          dia: "03",
          tema: "Nutrición Estética",
        },
        {
          dia: "17",
          tema:
            "Introducción a la Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "NOVIEMBRE",
      anio: "2026",
      pago: "16 AL 20",
      clases: [
        {
          dia: "07",
          tema:
            "Introducción a la Medicina Estética",
        },
        {
          dia: "21",
          tema: "Nutrición Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "DICIEMBRE",
      anio: "2026",
      pago: "14 AL 18",
      clases: [
        {
          dia: "05",
          tema: "Medicina Estética",
        },
        {
          dia: "19",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "ENERO",
      anio: "2027",
      pago: "18 AL 22",
      clases: [
        {
          dia: "09",
          tema: "Nutrición Estética",
        },
        {
          dia: "23",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "FEBRERO",
      anio: "2027",
      pago: "15 AL 19",
      clases: [
        {
          dia: "06",
          tema: "Nutrición Estética",
        },
        {
          dia: "20",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "MARZO",
      anio: "2027",
      pago: "15 AL 19",
      clases: [
        {
          dia: "06",
          tema: "Medicina Estética",
        },
        {
          dia: "20",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "ABRIL",
      anio: "2027",
      pago: "12 AL 16",
      clases: [
        {
          dia: "03",
          tema: "Medicina Estética",
        },
        {
          dia: "17",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "MAYO",
      anio: "2027",
      pago: "17 AL 21",
      clases: [
        {
          dia: "08",
          tema: "Medicina Estética",
        },
        {
          dia: "22",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "JUNIO",
      anio: "2027",
      pago: "14 AL 18",
      clases: [
        {
          dia: "05",
          tema: "Medicina Estética",
        },
        {
          dia: "19",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "JULIO",
      anio: "2027",
      pago: "12 AL 16",
      clases: [
        {
          dia: "03",
          tema: "Medicina Estética",
        },
        {
          dia: "17",
          tema: "Medicina Estética",
        },
      ],
      sello: false,
    },

    {
      mes: "AGOSTO",
      anio: "2027",
      pago: "-",
      clases: [
        {
          dia: "07",
          tema: "Medicina Estética",
        },
        {
          dia: "A DISPONIBILIDAD",
          tema:
            "Legislación de la Salud y Permisos Sanitarios",
        },
      ],
      sello: true,
    },
  ],
};

export default auxiliarMedicinaEstetica;
