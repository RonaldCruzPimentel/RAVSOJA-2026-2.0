"use client";

import { motion } from "motion/react";

import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating";

import { TextRotate } from "@/components/ui/text-rotate";

export default function RavsojaHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#060816] text-white flex items-center justify-center group">

      {/* GRADIENTES DE FONDO */}

    {/* MOUSE GLOW */}
<div className="absolute inset-0 overflow-hidden">

  <div
    className="
      absolute
      w-[700px]
      h-[700px]
      rounded-full
      bg-fuchsia-500/20
      blur-[140px]
      opacity-40
      pointer-events-none
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      animate-pulse
    "
  />

  <div
    className="
      absolute
      inset-0
      bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
      opacity-[0.05]
      mix-blend-soft-light
    "
  />

</div>
    

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      </div>

      {/* FLOATING ELEMENTS */}
      <Floating
        sensitivity={-0.6}
        className="pointer-events-none"
      >

        {/* LOGO 1 */}
        <FloatingElement
          depth={1}
          className="top-[15%] left-[8%]"
        >
          <motion.img
            src="/stickers/cuetmx.png"
            alt="CUETMX"
            className="w-32 md:w-40 opacity-80"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
        </FloatingElement>

        {/* LOGO 2 */}
        <FloatingElement
          depth={2}
          className="top-[20%] right-[10%]"
        >
          <motion.img
            src="/stickers/inafam.png"
            alt="INAFAM"
            className="w-28 md:w-36 opacity-80"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
          />
        </FloatingElement>

        {/* LOGO 3 */}
        <FloatingElement
          depth={3}
          className="bottom-[15%] left-[12%]"
        >
          <motion.img
            src="/stickers/antares.png"
            alt="ANTARES"
            className="w-36 md:w-44 opacity-80"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </FloatingElement>

        {/* LOGO 4 */}
        <FloatingElement
          depth={1.5}
          className="bottom-[10%] right-[12%]"
        >
          <motion.img
            src="/stickers/maquiavelo.png"
            alt="MAQUIAVELO"
            className="w-28 md:w-36 opacity-80"
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
        </FloatingElement>

      </Floating>

      {/* CONTENIDO */}
      <div className="relative z-20 max-w-5xl px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-sm text-white/60"
        >
          Consorcio Educativo RAVSOJA
        </motion.span>

        {/* TITULO */}
        <motion.h1
          className="mt-6 text-5xl md:text-8xl font-black leading-[0.9]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          Donde tú
          <br />

          <div className="flex justify-center mt-4">

            <TextRotate
              texts={[
                "perteneces",
                "creces",
                "aprendes",
                "transformas",
                "evolucionas",
              ]}
              mainClassName="text-fuchsia-400"
              staggerDuration={0.03}
              rotationInterval={2500}
              staggerFrom="last"
            />

          </div>
        </motion.h1>

        {/* TEXTO */}
        <motion.p
          className="mt-10 text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
        >
          Un ecosistema educativo que integra innovación,
          salud, desarrollo humano y formación profesional
          con experiencias visuales modernas y tecnología.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
          }}
        >

          <button className="px-8 py-4 rounded-full bg-fuchsia-500 hover:scale-105 transition-transform font-semibold shadow-2xl">
            Explorar RAVSOJA
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
            Ver Instituciones
          </button>

        </motion.div>

      </div>

    </section>
  );
}