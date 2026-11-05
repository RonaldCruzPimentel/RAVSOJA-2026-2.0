import { motion } from "framer-motion"
import { HERO_INSTITUTIONS } from "./heroData"
import { useRotatingInstitution } from "./useRotatingInstitution"

export default function RotatingInstitution({ className = "" }) {
  const { activeIndex, reduceMotion } = useRotatingInstitution()

  return (
    <span className={`preview-rotator ${className}`} aria-hidden="true" data-active-index={activeIndex}>
      {HERO_INSTITUTIONS.map((institution, index) => (
        <motion.span
          className="preview-rotator__word"
          data-institution={institution}
          key={institution}
          initial={false}
          animate={reduceMotion
            ? { opacity: index === 0 ? 1 : 0, y: 0 }
            : activeIndex === index
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: activeIndex > index ? -120 : 120 }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", visualDuration: 0.5, bounce: 0.18 }}
        >
          {institution}
        </motion.span>
      ))}
    </span>
  )
}
