import { useRef, useEffect, useState } from "react"
import {
  useScroll,
  useTransform,
  motion
} from "framer-motion"

export const ContainerScroll = ({
  titleComponent,
  children,
}) => {

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }

  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [20, 0]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleDimensions()
  )

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  )

  return (
    <div
      ref={containerRef}
      className="
        h-[70rem]
        md:h-[90rem]
        flex
        items-center
        justify-center
        relative
        px-4
      "
    >

      <div
        className="
          py-20
          md:py-40
          w-full
          relative
        "
        style={{
          perspective: "1000px",
        }}
      >

        {/* TITULO */}
        <motion.div
          style={{
            translateY: translate,
          }}
          className="
            max-w-5xl
            mx-auto
            text-center
            mb-20
          "
        >
          {titleComponent}
        </motion.div>

        {/* TABLET */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
          }}
          className="
            max-w-6xl
            mx-auto
            h-[320px]
            md:h-[700px]
            w-full
            border-[12px]
            border-[#202020]
            p-2
            md:p-4
            bg-[#111]
            rounded-[40px]
            shadow-2xl
          "
        >

          <div
            className="
              h-full
              w-full
              overflow-hidden
              rounded-[30px]
              bg-black
            "
          >
            {children}
          </div>

        </motion.div>

      </div>

    </div>
  )
}
