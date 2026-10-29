import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Shivam from './shivam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Shivam/>
  </StrictMode>,
)
