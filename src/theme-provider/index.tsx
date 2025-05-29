'use client';

import MuiGlobalStyles from './global-styles';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import 'keen-slider/keen-slider.min.css';

const theme = createTheme({
  direction: 'rtl',

  palette: {
    primary: {
      main: '#4a4dff',
    },
    secondary: {
      main: '#ffc4ba',
    },
    divider: '#b4b4b4',
  },

  typography: {
    fontFamily: 'Vazirmatn, sans-serif',

    h1: {
      fontWeight: 600,
      fontSize: 90,
    },
    h2: {
      fontWeight: 600,
      fontSize: 60,
    },
    h3: {
      fontWeight: 600,
      fontSize: 38,
    },
    h4: {
      fontWeight: 600,
      fontSize: 24,
    },
    h5: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight:'inherit'
    },
    h6: {
      fontWeight: 500,
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
    button: {
      fontWeight: 400,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'div',
          h2: 'div',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          body1: 'div',
          body2: 'div',
        },
      },
    },
  },
});

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MuiGlobalStyles />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
