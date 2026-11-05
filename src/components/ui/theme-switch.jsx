// Installed from @unlumen-ui/theme-switch; adapted for RAVSOJA's existing
// circular control, Lucide icons, Spanish labels and reduced-motion support.
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Sun, Moon } from "lucide-react"
import "./theme-switch.css"

const STORAGE_KEY = "ravsoja-header-theme"
function readTheme() {
  try { return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light" }
  catch { return "light" }
}
// Only these two components consume this attribute; the remaining site stays unchanged.
document.documentElement.dataset.ravTheme = readTheme()

export function ThemeSwitch({ iconSize = 20, className = "" }) {
  const [resolvedTheme, updateTheme] = useState(readTheme)
  const setTheme = (next) => {
    document.documentElement.dataset.ravTheme = next
    try { localStorage.setItem(STORAGE_KEY, next) } catch { /* Storage may be disabled. */ }
    updateTheme(next)
  }
  useEffect(() => {
    const sync = (event) => {
      if (event.key && event.key !== STORAGE_KEY) return
      const next = readTheme()
      document.documentElement.dataset.ravTheme = next
      updateTheme(next)
    }
    window.addEventListener("storage", sync)
    return () => window.removeEventListener("storage", sync)
  }, [])
  const reduced = useReducedMotion()
  const activeTransition = useRef(null)
  useEffect(() => () => { activeTransition.current?.skipTransition() }, [])
  const isDark = resolvedTheme === "dark"
  const label = isDark ? "Activar modo claro" : "Activar modo oscuro"
  const Icon = isDark ? Moon : Sun

  const toggle = (event) => {
    if (activeTransition.current) return
    const next = isDark ? "light" : "dark"
    const apply = () => {
      document.documentElement.dataset.ravTheme = next
      flushSync(() => setTheme(next))
    }
    if (reduced || !document.startViewTransition) {
      apply()
      return
    }
    const rect = event.currentTarget.getBoundingClientRect()
    // Use the button's viewport geometry for pointer, touch AND keyboard.
    // Native/synthesized click coordinates may be zero or use a different scale.
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const root = document.documentElement
    root.dataset.ravThemeTransition = "active"
    const transition = document.startViewTransition(apply)
    activeTransition.current = transition
    transition.ready.then(() => {
      root.animate({ clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${radius}px at ${x}px ${y}px)`,
      ] }, {
        duration: 280,
        easing: "cubic-bezier(.2,.7,.3,1)",
        pseudoElement: "::view-transition-new(root)",
        fill: "both",
      })
    }).catch(() => { /* No snapshot: keep the already applied theme. */ })
    transition.finished.catch(() => {}).finally(() => {
      activeTransition.current = null
      delete root.dataset.ravThemeTransition
    })
  }

  return <motion.button
    type="button"
    className={`theme-toggle unlumen-theme-switch ${className}`}
    onClick={toggle}
    aria-label={label}
    title={label}
    whileHover={reduced ? undefined : { scale: 1.08 }}
    whileTap={reduced ? undefined : { scale: .88 }}
    transition={{ type: "spring", duration: .2, bounce: 0 }}
  >
    <AnimatePresence initial={false}>
      <motion.span
        className="unlumen-theme-switch__icon"
        key={isDark ? "moon" : "sun"}
        initial={reduced ? false : { rotate: isDark ? -45 : 45, scale: .5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={reduced ? { opacity: 1 } : { rotate: isDark ? 45 : -45, scale: .5, opacity: 0 }}
        transition={{ duration: reduced ? 0 : .14, ease: "easeOut" }}
      ><Icon size={iconSize} strokeWidth={1.8} aria-hidden="true" /></motion.span>
    </AnimatePresence>
  </motion.button>
}
