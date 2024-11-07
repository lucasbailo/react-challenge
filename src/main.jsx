import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Newsletter from './components/NewsLetter/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Newsletter />
    <App />
  </StrictMode>,
)