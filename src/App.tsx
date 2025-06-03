import Routes from './routes'
import '@/i18n'
import MuiThemeProvider from './theme-provider'
import 'keen-slider/keen-slider.min.css'
import { Analytics } from '@vercel/analytics/react'
import RegisterSW from './components/register-sw'

export default function App() {
  return (
    <>
      <Analytics debug={false} />
      <RegisterSW />
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
    </>
  )
}
