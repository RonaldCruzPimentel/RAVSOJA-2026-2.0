import { useEffect, useState } from "react"
import { HERO_INSTITUTIONS } from "./heroData"

export function useRotatingInstitution() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setReduceMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_INSTITUTIONS.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [reduceMotion])

  return { activeIndex: reduceMotion ? 0 : activeIndex, reduceMotion }
}
