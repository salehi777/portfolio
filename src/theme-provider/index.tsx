import MuiGlobalStyles from './global-styles'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import 'keen-slider/keen-slider.min.css'
import { useMemo } from 'react'
import SpreadableTheme from './spreadable-theme'
import { useThemeStore } from '@/stores/themeStore'

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      common: string
      overlay: (init?: number) => string
    }
  }
  interface ThemeOptions {
    customShadows: {
      common: string
      overlay: (init?: number) => string
    }
  }
}

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const mode = useThemeStore((state) => state.mode)
  const theme = useMemo(
    () =>
      createTheme({
        direction: 'rtl',
        palette: {
          mode,
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
            lineHeight: 'inherit',
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
        customShadows: {
          common:
            mode === 'light'
              ? '#b5b5b5 0px 3px 8px'
              : '#434343 0px 3px 15px -3px',
          overlay: (init) =>
            mode === 'light'
              ? init
                ? `inset 0 0 0 1000px rgb(0 0 0 / ${init}%)`
                : 'none'
              : init
              ? `inset 0 0 0 1000px rgb(0 0 0 / ${init + 10}%)`
              : `inset 0 0 0 1000px rgb(0 0 0 / 10%)`,
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiGlobalStyles />
      <SpreadableTheme>{children}</SpreadableTheme>
    </ThemeProvider>
  )
}
