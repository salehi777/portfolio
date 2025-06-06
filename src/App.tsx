import '@/i18n'
import MuiThemeProvider from './theme-provider'
import 'keen-slider/keen-slider.min.css'
import { Analytics } from '@vercel/analytics/react'
import RegisterSW from './components/register-sw'
import { SpeedInsights } from '@vercel/speed-insights/react'
import ReactRoutes from './react-routes'

export default function App() {
  return (
    <>
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Analytics debug={false} />
          <SpeedInsights />
        </>
      )}
      <RegisterSW />
      <MuiThemeProvider>
        <ReactRoutes />
      </MuiThemeProvider>
    </>
  )
}
