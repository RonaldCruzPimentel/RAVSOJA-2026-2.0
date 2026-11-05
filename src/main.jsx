import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RavsojaIntro from './components/ui/RavsojaIntro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RavsojaIntro><App /></RavsojaIntro>
  </StrictMode>,
)
