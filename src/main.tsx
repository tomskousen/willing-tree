import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirebaseApp from './FirebaseApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseApp />
  </StrictMode>,
)
