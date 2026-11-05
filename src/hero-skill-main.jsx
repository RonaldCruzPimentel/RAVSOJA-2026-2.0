import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import HeroPreviewApp from "./HeroPreviewApp"
import "./index.css"

createRoot(document.getElementById("root")).render(<StrictMode><HeroPreviewApp variant="skill" /></StrictMode>)
