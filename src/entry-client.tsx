import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'

if (import.meta.env.VITE_VERCEL_ENV) {
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} else {
  hydrateRoot(
    document.getElementById('root')!,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
