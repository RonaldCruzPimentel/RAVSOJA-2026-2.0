import Navbar from "./components/layout/Navbar"
import HeroSkillPreview from "./components/hero-previews/HeroSkillPreview"
import HeroDirectPreview from "./components/hero-previews/HeroDirectPreview"
import "./components/hero-previews/HeroPreviews.css"

export default function HeroPreviewApp({ variant }) {
  return (
    <div className="preview-shell">
      <a className="skip-link" href="#inicio">Saltar al Hero</a>
      <Navbar />
      {variant === "skill" ? <HeroSkillPreview /> : <HeroDirectPreview />}
    </div>
  )
}
