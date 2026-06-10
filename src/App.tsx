import AppThemeProvider from './components/providers/theme-provider'
import ToasterContainer from './components/providers/toaster-container'
import AppRoutes from './routes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import 'keen-slider/keen-slider.min.css'

export default function App() {
  return (
    <>
      {import.meta.env.PROD && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
      <AppThemeProvider>
        <ToasterContainer />
        <AppRoutes />
      </AppThemeProvider>
    </>
  )
}
