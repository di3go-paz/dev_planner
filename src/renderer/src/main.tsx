import './assets/main.css'
import { MemoryRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </StrictMode>
)
