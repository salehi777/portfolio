import Routes from './routes';
import MuiThemeProvider from './theme-provider';
import 'keen-slider/keen-slider.min.css';
import { Analytics } from '@vercel/analytics/react';
import RegisterSW from './components/register-sw';

export default function App() {
  return (
    <>
      <Analytics />
      <RegisterSW />
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
    </>
  );
}
