const withNumbers = (teachers) =>
  teachers.map((teacher, index) => ({
    ...teacher,
    numero: String(index + 1).padStart(2, "0"),
  }));

const dianaMartinez = {
  nombre: "Dra. Diana Luz Martínez Ramírez",
  nombreCorto: "Dra. Diana Martínez",
  resumen: "Medicina General · Farmacología Médica · Seguridad Ocupacional",
  formacion: [
    {
      titulo: "Licenciatura",
      texto: "Médico Cirujano por la Universidad Nacional Autónoma de México (UNAM).",
    },
    {
      titulo: "Maestría",
      texto: "Maestría en Seguridad e Higiene Ocupacional por la Secretaría del Trabajo del Estado de México.",
    },
    {
      titulo: "Formación complementaria",
      texto: "Farmacología Médica y Terapéutica, Medicina Interna, Metabolismo, Nutrición y Obesidad, entre otros diplomados del área de salud.",
    },
  ],
  experiencia: [
    "Más de 26 años de experiencia corporativa e institucional en programas de prevención, seguridad ocupacional e higiene.",
    "Experiencia en estudios de fármacos, primeros auxilios y capacitación de personal a nivel nacional.",
  ],
};

const joaquinChavez = {
  nombre: "Dr. Joaquín Omar Chávez Santiago",
  nombreCorto: "Dr. Joaquín Chávez",
  resumen: "Química Farmacéutica · Ciencias Biológicas · Farmacología",
  formacion: [
    {
      titulo: "Licenciatura",
      texto: "Químico Farmacéutico Biólogo por la Universidad Autónoma de Tamaulipas.",
    },
    {
      titulo: "Posgrados",
      texto: "Maestría en Ciencias y Tecnología de Alimentos y Doctorado en Ciencias (Biología).",
    },
    {
      titulo: "Especialidades",
      texto: "Biología molecular, genética, microbiología, bioinformática, química farmacéutica y medicina regenerativa.",
    },
  ],
  experiencia: [
    "Experiencia docente en programas especializados de farmacología, química cosmética, medicina regenerativa y sueroterapia.",
    "Participación académica en Genética e Ingeniería Genética en la Universidad de Guanajuato.",
  ],
};

const juanJimenez = {
  nombre: "Mtro. Juan Jiménez Antúnez",
  nombreCorto: "Mtro. Juan Jiménez",
  resumen: "Química Farmacéutica · Administración de Hospitales",
  formacion: [
    {
      titulo: "Licenciatura",
      texto: "Químico Farmacéutico Biólogo.",
    },
    {
      titulo: "Maestría",
      texto: "Administración de Hospitales.",
    },
    {
      titulo: "Diplomados",
      texto: "Ozonoterapia y Terapia Neural.",
    },
  ],
  experiencia: [
    "Profesor de Química en el Instituto Blaise Pascal, con experiencia en planeación y diseño de materiales didácticos.",
    "Ponente en temas de manejo de muestras de laboratorio y participante en investigación científica.",
  ],
};

const michelleGomez = {
  nombre: "Dra. Michelle Grace Gómez Barrientos",
  nombreCorto: "Dra. Michelle Gómez",
  resumen: "Medicina · Cirugía Estética · Naturoterapia",
  formacion: [
    { titulo: "Licenciaturas", texto: "Naturoterapia por la Escuela de Medicina Alternativa y Médico Cirujano por la Universidad Autónoma de Chiapas." },
    { titulo: "Maestría", texto: "Maestría en Cirugía Estética por el Instituto de Estudios Superior en Medicina." },
    { titulo: "Formación complementaria", texto: "Diplomados en Anatomía Facial y Dermocosmiatría." },
  ],
  experiencia: [
    "Experiencia docente en ciencias biológicas y en diplomados de medicina estética, enfermería estética, dermocosmiatría, cosmiatría y aparatología estética.",
  ],
};

const elviaGarcia = {
  nombre: "Lic. Elvia Mercedes García Redondo",
  nombreCorto: "Lic. Elvia García",
  resumen: "Cosmiatría · Micropigmentación · Cosmetología",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Cosmiatría." },
    { titulo: "Diplomados", texto: "Cosmiatría especializada, Micropigmentación, Maquillaje Profesional y Auxiliar de Laboratorio." },
  ],
  experiencia: [
    "Profesora en diplomados de Micropigmentación, Cosmiatría, Cosmetología y Dermocosmiatría.",
  ],
};

const andreaRamirez = {
  nombre: "Mtra. Andrea Estefany Ramírez Nieves",
  nombreCorto: "Mtra. Andrea Ramírez",
  resumen: "Nutrición Humana · Educación y Docencia · Bariatría Clínica",
  formacion: [
    { titulo: "Licenciatura", texto: "Nutrición Humana." },
    { titulo: "Maestría", texto: "Maestría en Educación y Docencia." },
    { titulo: "Diplomados", texto: "Nutrición Clínica, Salud Pública, Suplementación, Enfermedad Renal, Bariatría Clínica, Diabetología y Farmaconutrición." },
  ],
  experiencia: [
    "Docente universitaria y de diplomados médicos y especialidades en CUETMX.",
    "Coautora y editora de material académico de fisiopatología.",
  ],
};

const cristelAntonio = {
  nombre: "Mtra. Cristel Antonio Ruiz",
  nombreCorto: "Mtra. Cristel Antonio",
  resumen: "Cosmetología · Cosmiatría · Ciencias de la Educación",
  formacion: [
    { titulo: "Formación técnica", texto: "Cosmetología y Técnico Profesional en Cosmiatría y Aparatología por Instituto Amevie." },
    { titulo: "Licenciatura y maestría", texto: "Licenciatura en Psicología y Maestría en Ciencias de la Educación con formación docente e investigación." },
    { titulo: "Diplomado", texto: "Dermatocosmiatría por Instituto Andrew's." },
  ],
  experiencia: [
    "Trayectoria docente presencial y en línea en universidades como IEXPRO, UNACH, Universidad del Sur, CEUSS y Universidad de los Ángeles.",
    "Experiencia que integra psicología, pedagogía, cosmetología y cosmiatría.",
  ],
};

const seleneLopez = {
  nombre: "Mtra. Selene Yaneth López Manuel",
  nombreCorto: "Mtra. Selene López",
  resumen: "Enfermería · Educación · Cosmiatría y Podología",
  formacion: [
    { titulo: "Licenciatura y maestría", texto: "Licenciatura en Enfermería por IESEEECH y Maestría en Educación por IAP Chiapas." },
    { titulo: "Especialidades", texto: "Cosmetología, Cosmiatría, Podología Integral y certificación en ortonixias, resina y ortoplastia podológica." },
    { titulo: "Diplomados", texto: "Actualización de Enfermería en Urgencias, Enfermería Dermoestética y Microneedling." },
  ],
  experiencia: [
    "Docente en instituciones de nivel medio superior y superior, incluyendo CECyTE Chiapas y Universidad Maya.",
    "Profesional activa en ISSSTE y miembro de colegios estatales y nacionales de enfermería.",
  ],
};

const moisesArquez = {
  nombre: "Dr. Moisés Alberto Árquez Mendoza",
  nombreCorto: "Dr. Moisés Árquez",
  resumen: "Ciencias Biomédicas · Biología Molecular · Farmacología",
  formacion: [
    { titulo: "Licenciatura y maestría", texto: "Biólogo y Magíster en Biología por la Universidad del Atlántico." },
    { titulo: "Doctorado", texto: "Doctor en Ciencias Biomédicas por la Universidad del Valle." },
    { titulo: "Especialidad", texto: "Biología molecular, bioinformática, genómica, evolución molecular, farmacología y prescripción de medicamentos." },
  ],
  experiencia: [
    "Investigador Asociado por COLCIENCIAS y par académico del Consejo Nacional de Acreditación.",
    "Experiencia académica en farmacología, prescripción de medicamentos, química farmacéutica, medicina regenerativa y sueroterapia.",
  ],
};

const ednaPerez = {
  nombre: "Mtra. Edna Citlali Pérez Cortés",
  nombreCorto: "Mtra. Edna Pérez",
  resumen: "Nutrición · Nutrición Clínica · Endocrinología",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Nutrición." },
    { titulo: "Maestría", texto: "Maestría en Nutrición Clínica." },
    { titulo: "Diplomado", texto: "Nutrición en Endocrinología." },
  ],
  experiencia: [
    "Docente de Nutrición en la Universidad Privada de Irapuato y Universidad Centro de México.",
    "Participación constante en actualizaciones de Nutrición Pediátrica, Ética Académica e Investigación.",
  ],
};

const cindyArcos = {
  nombre: "Lic. Cindy Alejandra Arcos Rodríguez",
  nombreCorto: "Lic. Cindy Arcos",
  resumen: "Fisioterapia · Rehabilitación Geriátrica · Salud Deportiva",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Fisioterapia por la Universidad de Durango, Campus Morelia." },
    { titulo: "Diplomados", texto: "Rehabilitación Geriátrica y Farmacología y Suplementación Deportiva." },
    { titulo: "Certificaciones", texto: "Punción Seca y Ejercicio Terapéutico en Rehabilitación." },
  ],
  experiencia: [
    "Experiencia profesional en consulta privada y fisioterapia deportiva.",
    "Atención a pacientes con enfermedades neurodegenerativas.",
  ],
};

const darianaRuiz = {
  nombre: "Lic. Cruz Dariana Ruiz Reyes",
  nombreCorto: "Lic. Dariana Ruiz",
  resumen: "Fisioterapia · Rehabilitación Clínica y Neurológica",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Fisioterapia por la Universidad de Ciencias y Artes de Chiapas (UNICACH)." },
    { titulo: "Formación complementaria", texto: "NOM-046, Medicina Tradicional, Punción Seca y Electro-punción." },
  ],
  experiencia: [
    "Experiencia en rehabilitación hospitalaria, rehabilitación pediátrica y neurológica en CRIT.",
    "Práctica clínica en Hospital Militar Regional de Tuxtla Gutiérrez y centro de rehabilitación Fisio-Vida.",
  ],
};

const eleniMorales = {
  nombre: "Lic. Eleni Yackelin Morales Gómez",
  nombreCorto: "Lic. Eleni Morales",
  resumen: "Fisioterapia · Imagenología · Masaje Terapéutico",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Fisioterapia." },
    { titulo: "Diplomados", texto: "Imagenología y Masaje Terapéutico y Descontracturante." },
  ],
  experiencia: [
    "Docente en la Escuela DIF Estatal Chiapas para la Licenciatura en Fisioterapia.",
    "Docente e instructora de cursos-taller en UNICACH.",
  ],
};

const fernandoCastillo = {
  nombre: "Lic. Fernando Gabriel Castillo Gutiérrez",
  nombreCorto: "Lic. Fernando Castillo",
  resumen: "Fisioterapia · Rehabilitación Física · Enfermedades Crónicas",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Fisioterapia por UNICACH." },
    { titulo: "Diplomado", texto: "Abordaje Integral del Paciente con Enfermedades Crónicas." },
    { titulo: "Formación complementaria", texto: "Cursos en enfermedades crónicas, diabetes, hipertensión, discapacidad, autismo, cuidados paliativos y obesidad." },
  ],
  experiencia: [
    "Fundador del consultorio Fisioterapia y Rehabilitación Física Meraki y excoordinador de Rehabilitación y Terapia Física en DIF Las Margaritas.",
    "Experiencia clínica multidisciplinaria y participación como ponente en encuentros de UNAM e INECOL.",
  ],
};

const isabelCortes = {
  nombre: "Lic. María Isabel Pérez Cortés",
  nombreCorto: "Lic. Isabel Cortés",
  resumen: "Naturoterapia · Terapia Física · Terapias Alternativas",
  formacion: [
    { titulo: "Licenciaturas", texto: "Naturoterapia y Terapia Física y Rehabilitación." },
    { titulo: "Especialidades y diplomados", texto: "Homeopatía, Terapias Holísticas y Terapia Física y Rehabilitación en el área alternativa." },
  ],
  experiencia: [
    "Emprendimiento de Fisiomed, centro de rehabilitación holística en terapias alternativas.",
  ],
};

const rafaelRojas = {
  nombre: "Lic. Rafael Rojas López",
  nombreCorto: "Lic. Rafael Rojas",
  resumen: "Naturoterapia · Herbolaria · Fitoterapia",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Naturoterapia." },
    { titulo: "Especialidades y diplomados", texto: "Especialización en Herbolaria y diplomados en Herbolaria y Fitoterapia." },
  ],
  experiencia: [
    "Director General de CERNATURAL y del Centro Evaluador y Certificador en Competencias Laborales SERI.",
    "Trayectoria en Servicios de Salud de Oaxaca y programas de medicina tradicional e intercultural.",
  ],
};

const reginaAguilar = {
  nombre: "Lic. Karla Regina Aguilar Gordillo",
  nombreCorto: "Lic. Regina Aguilar",
  resumen: "Naturoterapia · Farmacología Homeopática · Fitoterapia",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Naturoterapia por la Escuela de Medicina Alternativa." },
    { titulo: "Diplomados", texto: "Farmacología Homeopática y Naturista; Fitoterapia y Suplementación Natural." },
  ],
  experiencia: [
    "Emprendedora en salud y estética natural mediante productos cosméticos para el cuidado dermatológico y capilar.",
    "Ponente en la Jornada Científica EMA y participante en congresos de salud pública y manejo avanzado de heridas.",
  ],
};

const claudiaDonaji = {
  nombre: "Lic. Claudia Donají Trujillo Gallegos",
  nombreCorto: "Lic. Claudia Donají",
  resumen: "Enfermería · Podología Clínica · Cuidado del Pie",
  formacion: [
    { titulo: "Formación profesional", texto: "Profesional Técnico Bachiller en Enfermería General y Licenciatura en Enfermería General." },
    { titulo: "Diplomado", texto: "Podología Clínica por CUETMX." },
    { titulo: "Certificaciones", texto: "Habilitación Física Funcional con inserción laboral en Podología, Envejecimiento Saludable, Curación de Heridas y RCP Avanzado." },
  ],
  experiencia: [
    "Práctica clínica podológica en Foot Care y atención especializada a domicilio en onicocriptosis, onicogrifosis y pie diabético.",
  ],
};

const yessicaFlores = {
  nombre: "Dra. Yessica Yuliana Flores Flores",
  nombreCorto: "Dra. Yessica Flores",
  resumen: "Gerontología · Educación · Tanatología",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Gerontología." },
    { titulo: "Posgrados", texto: "Maestría en Educación y Doctorado en Tanatología." },
    { titulo: "Diplomado", texto: "Tanatología Clínica." },
  ],
  experiencia: [
    "Docente de Gerontología en UNACH y docente en línea de diplomados en SECIM.",
    "Directora de tesis y miembro de la Red Latinoamericana y Caribeña de investigadores en envejecimiento y gerontología.",
  ],
};

const reneAlcocer = {
  nombre: "Mtro. René Jahir Ortiz Alcocer",
  nombreCorto: "Mtro. René Alcocer",
  resumen: "Derecho Sanitario · Derecho Médico · Legislación en Salud",
  formacion: [
    { titulo: "Licenciatura y maestría", texto: "Licenciatura en Derecho y Maestría en Derecho Procesal Penal y Sistema Penal Acusatorio." },
    { titulo: "Especialidad", texto: "Especialidad en Derecho Sanitario." },
    { titulo: "Diplomados", texto: "Procedimientos Contenciosos y Administrativos, Psicología Criminal y Derecho Médico." },
  ],
  experiencia: [
    "Ponente en encuentros nacionales sobre regulación jurídica de la eutanasia y temas legal-médicos.",
    "Experiencia en servicio público y organización académica de diplomados de enfermería geriátrica.",
  ],
};

const ricardoMontoya = {
  nombre: "Mtro. Ricardo Arturo Montoya López",
  nombreCorto: "Mtro. Ricardo Montoya",
  resumen: "Psicología Clínica · Salud Mental · Tanatología",
  formacion: [
    { titulo: "Licenciatura", texto: "Licenciatura en Psicología." },
    { titulo: "Maestría", texto: "Maestría en Psicología Clínica y de la Salud." },
    { titulo: "Diplomados", texto: "Tanatología Integral y Herramientas Didácticas en el Aula y Fomento del Conocimiento Científico." },
  ],
  experiencia: [
    "Docente en UVM, UPSUM, Universidad del Sur, Instituto Hispano Jaime Sabines y UNACH.",
    "Experiencia en asignaturas de salud pública, bioética, epidemiología, salud mental y psicopatología.",
  ],
};

const yessicaLopez = {
  nombre: "Dra. Yessica López Ramírez",
  nombreCorto: "Dra. Yessica López",
  resumen: "Bioquímica · Biotecnología Vegetal · Tricología Clínica",
  formacion: [
    { titulo: "Formación profesional", texto: "Carrera Técnica en Laboratorista Clínico e Ingeniería Bioquímica." },
    { titulo: "Posgrados", texto: "Maestría en Biotecnología Vegetal y Doctorado en Ciencias Biológicas." },
    { titulo: "Diplomados", texto: "Tricología Capilar, Medicina Capilar y Tricología Clínica." },
  ],
  experiencia: [
    "Investigación fitoquímica aplicada a la tricología y experiencia en laboratorio clínico y farmacéutico.",
    "Docencia en Medicina y Bioquímica Capilar en Universidad Cuauhtémoc.",
  ],
};

const nancyRamirez = {
  nombre: "Mtra. Nancy Julia Ramírez Mañón",
  nombreCorto: "Mtra. Nancy Ramírez",
  resumen: "Acupuntura · Dirección de Salud · Tricología Capilar",
  formacion: [
    { titulo: "Licenciatura y maestría", texto: "Licenciatura en Acupuntura Humana Rehabilitatoria y Maestría en Dirección de Organizaciones de Salud." },
    { titulo: "Diplomados", texto: "Ozonoterapia, Técnicas Especiales en Salud Integral, Tricología Cosmiátrica y Aparatología aplicada a Tricología." },
  ],
  experiencia: [
    "Fundadora del equipo de Medicina Integral y Cosmiatría Bio-Good.",
    "Docente de cosmiatría, anatomía, fisiología, tricología, medicina tradicional china y herbolaria.",
  ],
};

export const docentesAgosto = {
  "farmacologia-clinica": withNumbers([
    joaquinChavez,
    {
      nombre: "Dr. Moisés Alberto Árquez Mendoza",
      nombreCorto: "Dr. Moisés Árquez",
      resumen: "Ciencias Biomédicas · Biología Molecular · Farmacología",
      formacion: [
        {
          titulo: "Licenciatura y maestría",
          texto: "Biólogo y Magíster en Biología por la Universidad del Atlántico.",
        },
        {
          titulo: "Doctorado",
          texto: "Doctor en Ciencias Biomédicas por la Universidad del Valle.",
        },
        {
          titulo: "Especialidad",
          texto: "Biología molecular, bioinformática, genómica, evolución molecular, farmacología y prescripción de medicamentos.",
        },
      ],
      experiencia: [
        "Investigador Asociado por COLCIENCIAS y par académico del Consejo Nacional de Acreditación.",
        "Experiencia académica en farmacología, prescripción de medicamentos en enfermería, química farmacéutica y medicina regenerativa.",
      ],
    },
    dianaMartinez,
    juanJimenez,
  ]),

  "medicina-regenerativa": withNumbers([
    {
      nombre: "Dr. David Manuel Guzmán Torres",
      nombreCorto: "Dr. David Guzmán",
      resumen: "Enfermería · Homeopatía · Medicina Estética Regenerativa",
      formacion: [
        {
          titulo: "Formación profesional",
          texto: "Licenciatura en Enfermería y carrera en Homeopatía.",
        },
        {
          titulo: "Posgrados",
          texto: "Máster en Homeopatía y Máster en Medicina Estética Regenerativa.",
        },
        {
          titulo: "Certificaciones",
          texto: "Medicina regenerativa, ozonoterapia, cuidados paliativos y urgencias médico-quirúrgicas.",
        },
      ],
      experiencia: [
        "Trayectoria académica y profesional en medicina homeopática, regenerativa y estética.",
        "Formación especializada en manejo del dolor, geriatría, enfermedades crónicas y células madre.",
      ],
    },
    {
      nombre: "Dr. David Javier Guzmán Tapia",
      nombreCorto: "Dr. David Tapia",
      resumen: "Homeopatía · Medicina Regenerativa · Terapias Complementarias",
      formacion: [
        {
          titulo: "Licenciatura",
          texto: "Licenciatura en Homeopatía por la Escuela Superior de Homeopatía.",
        },
        {
          titulo: "Maestría",
          texto: "Máster en Homeopatía por la Universidad UNCEMA.",
        },
        {
          titulo: "Formación complementaria",
          texto: "Medicina regenerativa y células madre, salud pública, manejo del dolor, ozonoterapia y terapias complementarias.",
        },
      ],
      experiencia: [
        "Certificación en manejo integral de tratamientos estéticos faciales y formación en sueroterapia y terapia celular.",
        "Trayectoria en medicina regenerativa, medicina estética y uso de células madre.",
      ],
    },
    joaquinChavez,
    {
      nombre: "Dra. Manuela Gómez Gaviria",
      nombreCorto: "Dra. Manuela Gómez",
      resumen: "Biología Molecular · Genética · Inmunología",
      formacion: [
        {
          titulo: "Licenciatura",
          texto: "Licenciada en Biología por la Universidad de Caldas, Colombia.",
        },
        {
          titulo: "Posgrados",
          texto: "Maestría y Doctorado en Ciencias (Biología) por la Universidad de Guanajuato.",
        },
        {
          titulo: "Especialidades",
          texto: "Biología molecular, bioquímica, genética, inmunología y microbiología.",
        },
      ],
      experiencia: [
        "Experiencia docente y de investigación en biología, genética, bioinformática y microbiología.",
        "Trabajo académico sobre procesos celulares, respuesta inmunológica, reparación de tejidos y fundamentos de terapias regenerativas.",
      ],
    },
    juanJimenez,
  ]),

  bariatria: withNumbers([
    {
      nombre: "Dra. Diana Aracely Lara Rodríguez",
      nombreCorto: "Dra. Diana Lara",
      resumen: "Nutrición Clínica · Ciencias de la Educación",
      formacion: [
        {
          titulo: "Licenciatura",
          texto: "Nutrición y Ciencia de los Alimentos por la Universidad Iberoamericana de León.",
        },
        {
          titulo: "Posgrados",
          texto: "Maestría en Nutrición Clínica y Doctorado en Ciencias de la Educación.",
        },
        {
          titulo: "Diplomados",
          texto: "Educación en Diabetes, Nutrición Renal, Nutrición Pediátrica Integral y Life Long Learning por ESPEN.",
        },
      ],
      experiencia: [
        "Coordinadora Nacional de programas de Nutrición en Salud Ocupacional para Bachoco.",
        "Experiencia docente universitaria y miembro del Colegio Mexicano de Nutrición Clínica y Terapia Nutricional.",
      ],
    },
    dianaMartinez,
    {
      nombre: "Mtra. Andrea Estefany Ramírez Nieves",
      nombreCorto: "Mtra. Andrea Ramírez",
      resumen: "Nutrición Humana · Educación y Docencia · Bariatría Clínica",
      formacion: [
        {
          titulo: "Licenciatura",
          texto: "Nutrición Humana.",
        },
        {
          titulo: "Maestría",
          texto: "Maestría en Educación y Docencia.",
        },
        {
          titulo: "Diplomados",
          texto: "Nutrición Clínica, Salud Pública, Nutrición y Suplementación, Enfermedad Renal, Bariatría Clínica, Diabetología y Farmaconutrición.",
        },
      ],
      experiencia: [
        "Docente universitaria en Nutrición y en diplomados médicos y especialidades de CUETMX.",
        "Coautora y editora de material académico de fisiopatología.",
      ],
    },
    {
      nombre: "Mtro. Jorge Alberto Medina Lugo",
      nombreCorto: "Mtro. Jorge Medina",
      resumen: "Nutrición Humana · Educación · Neuroeducación",
      formacion: [
        {
          titulo: "Formación profesional",
          texto: "Técnico en Urgencias Médicas y Licenciado en Nutrición Humana.",
        },
        {
          titulo: "Posgrado",
          texto: "Maestría en Educación y especialización en Neuroeducación.",
        },
        {
          titulo: "Diplomados",
          texto: "Nutrición Clínica, Nutrición Humana en las diferentes etapas de la vida y Psicología Educativa.",
        },
      ],
      experiencia: [
        "Académico en la Universidad del Valle de México y profesor de Fisiopatología en la Universidad Autónoma de la Ciudad de México.",
        "Miembro de comités de evaluación profesional y coautor de un libro sobre bases neuroeducativas.",
      ],
    },
  ]),

  "cosmiatria-avanzada": withNumbers([
    michelleGomez,
    elviaGarcia,
    andreaRamirez,
    cristelAntonio,
    seleneLopez,
  ]),

  "farmaco-metabolico": withNumbers([
    moisesArquez,
    ednaPerez,
    juanJimenez,
  ]),

  "fisioterapia-neurodegenerativa": withNumbers([
    cindyArcos,
    darianaRuiz,
    eleniMorales,
    fernandoCastillo,
  ]),

  herbolaria: withNumbers([
    isabelCortes,
    rafaelRojas,
    reginaAguilar,
  ]),

  "masajes-terapeuticos": withNumbers([
    eleniMorales,
    isabelCortes,
    cristelAntonio,
  ]),

  podologia: withNumbers([
    claudiaDonaji,
    seleneLopez,
  ]),

  tanatologia: withNumbers([
    yessicaFlores,
    reneAlcocer,
    ricardoMontoya,
  ]),

  tricologia: withNumbers([
    yessicaLopez,
    nancyRamirez,
  ]),

  cosmiatria: withNumbers([
    elviaGarcia,
    cristelAntonio,
    nancyRamirez,
    seleneLopez,
    reneAlcocer,
  ]),
};
