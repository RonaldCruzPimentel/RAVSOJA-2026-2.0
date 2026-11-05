import {
  GraduationCap,
  ShieldCheck,
  Lightbulb,
  Users,
  HeartHandshake,
  Globe
} from "lucide-react"

function AboutSection() {

  const values = [

    {
      icon: <Lightbulb size={22} />,
      title: "Innovación",
      desc: "Promovemos creatividad y nuevas formas de aprendizaje."
    },

    {
      icon: <ShieldCheck size={22} />,
      title: "Excelencia",
      desc: "Mantenemos altos estándares académicos y profesionales."
    },

    {
      icon: <Users size={22} />,
      title: "Inclusión",
      desc: "Fomentamos un entorno accesible y diverso."
    },

    {
      icon: <HeartHandshake size={22} />,
      title: "Vocación de servicio",
      desc: "Formamos profesionales con empatía y compromiso humano."
    },

    {
      icon: <Globe size={22} />,
      title: "Responsabilidad social",
      desc: "Impactamos positivamente en nuestra comunidad."
    },

    {
      icon: <GraduationCap size={22} />,
      title: "Liderazgo",
      desc: "Impulsamos el desarrollo integral y profesional."
    }

  ]

  return (

    <section
      id="quienes-somos"
      className="
        relative
        bg-white
        py-28
        overflow-hidden
      "
    >

      {/* LIGHT EFFECT */}
      <div
        className="
          absolute
          top-0
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-[#1D519E]/5
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          max-w-[1400px]
          mx-auto
          px-6
          lg:px-10
        "
      >

        {/* TOP */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* TEXT */}
          <div>

            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-[#1D519E]/10
                text-[#1D519E]
                text-sm
                font-medium
                mb-6
              "
              style={{
                fontFamily: "TT Fors"
              }}
            >
              QUIÉNES SOMOS
            </span>

            <h2
              className="
                text-[2.8rem]
                md:text-[4rem]
                leading-[1.1]
                text-[#0D1B29]
                mb-8
              "
              style={{
                fontFamily: "TT Fors"
              }}
            >
              Educación con visión humana,
              innovación y excelencia.
            </h2>

            <p
              className="
                text-black/70
                text-lg
                leading-relaxed
                mb-6
              "
              style={{
                fontFamily: "TT Fors"
              }}
            >
              Somos un consorcio educativo conformado por instituciones especializadas en educación y ciencias de la salud, así como en terapias complementarias, desarrollo humano, capacitación laboral y formación académica, comprometidos con brindar programas de alta calidad orientados al crecimiento profesional, la innovación y el fortalecimiento integral de nuestros alumnos.
            </p>

            <p
              className="
                text-black/60
                leading-relaxed
              "
              style={{
                fontFamily: "TT Fors"
              }}
            >
              En RAVSOJA impulsamos una educación moderna,
              flexible e innovadora, enfocada en formar
              profesionales preparados para los desafíos
              del presente y del futuro.
            </p>

          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              flex
              justify-center
            "
          >

            <div
              className="
                absolute
                w-[420px]
                h-[420px]
                bg-[#1D519E]/10
                rounded-full
                blur-[90px]
              "
            />

            <img
              src="/mascota.webp"
              alt="Mascota RAVSOJA"
              loading="lazy"
              decoding="async"
              className="
                relative
                z-10
                w-[320px]
                md:w-[420px]
                object-contain
                drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              "
            />

          </div>

        </div>

        {/* MISION VISION */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-28
          "
        >

          {[
            {
              title: "Misión",
              text: "Formar individuos altamente capacitados y comprometidos con el bienestar de la sociedad mediante programas educativos innovadores."
            },

            {
              title: "Visión",
              text: "Ser un referente educativo en excelencia, innovación y transformación humana en México y Latinoamérica."
            },

            {
              title: "Objetivo",
              text: "Desarrollar profesionales competentes capaces de generar impacto positivo en su entorno y comunidad."
            }

          ].map((item) => (

            <div
              key={item.title}
              className="
                p-8
                rounded-[32px]
                border
                border-black/10
                bg-white
                hover:-translate-y-2
                transition-all
                duration-500
                shadow-sm
              "
            >

              <h3
                className="
                  text-2xl
                  text-[#0D1B29]
                  mb-4
                "
                style={{
                  fontFamily: "TT Fors"
                }}
              >
                {item.title}
              </h3>

              <p
                className="
                  text-black/65
                  leading-relaxed
                "
                style={{
                  fontFamily: "TT Fors"
                }}
              >
                {item.text}
              </p>

            </div>

          ))}

        </div>

        {/* VALORES */}
        <div className="mt-28">

          <div className="text-center mb-16">

            <h2
              className="
                text-[2.4rem]
                md:text-[3.5rem]
                text-[#0D1B29]
                mb-4
              "
              style={{
                fontFamily: "TT Fors"
              }}
            >
              Nuestros valores
            </h2>

            <p
              className="
                text-black/60
                max-w-2xl
                mx-auto
                leading-relaxed
              "
              style={{
                fontFamily: "TT Fors"
              }}
            >
              Construimos una comunidad educativa basada
              en ética, innovación, empatía y liderazgo.
            </p>

          </div>

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {values.map((item) => (

              <div
                key={item.title}
                className="
                  p-7
                  rounded-[28px]
                  border
                  border-black/10
                  bg-[#fafafa]
                  hover:bg-white
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#1D519E]/10
                    text-[#1D519E]
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-xl
                    text-[#0D1B29]
                    mb-3
                  "
                  style={{
                    fontFamily: "TT Fors"
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-black/60
                    leading-relaxed
                  "
                  style={{
                    fontFamily: "TT Fors"
                  }}
                >
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default AboutSection
