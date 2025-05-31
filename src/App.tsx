import Routes from './routes';
import MuiThemeProvider from './theme-provider';
import "keen-slider/keen-slider.min.css";

export default function App() {

  return (
    <>
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
    </>
  );
}
