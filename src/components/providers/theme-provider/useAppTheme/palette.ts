import type {
  Color,
  PaletteOptions,
  PaletteColorOptions,
  PaletteMode,
} from '@mui/material/styles'
import { blue, emerald, red, amber, indigo, gray } from './colors'

const palette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: { main: blue[mode === 'light' ? 500 : 400], ...blue },
  success: {
    main: emerald[mode === 'light' ? 500 : 400],
    contrastText: mode === 'light' ? '#fff' : '#000',
    ...emerald,
  },
  error: { main: red[mode === 'light' ? 500 : 400], ...red },
  warning: {
    main: amber[mode === 'light' ? 500 : 400],
    contrastText: mode === 'light' ? '#fff' : '#000',
    ...amber,
  },
  info: { main: indigo[mode === 'light' ? 500 : 400], ...indigo },
  gray: {
    main: gray[mode === 'light' ? 400 : 500],
    contrastText: mode === 'light' ? '#fff' : '#000',
    dark: gray[mode === 'light' ? 500 : 600],
    ...gray,
  },
  background: {
    default: gray[mode === 'light' ? 50 : 900],
    paper: mode === 'light' ? '#fff' : gray[800],
  },
  text: {
    primary: gray[mode === 'light' ? 900 : 100],
    secondary: gray[mode === 'light' ? 500 : 400],
    disabled: gray[mode === 'light' ? 400 : 500],
  },
  divider: gray[mode === 'light' ? 300 : 700],
})

export default palette

type ColorPartial = Partial<Color>

declare module '@mui/material/styles' {
  interface Palette {
    gray: PaletteColorOptions & ColorPartial
  }
  interface PaletteOptions {
    gray: PaletteColorOptions & ColorPartial
  }

  interface PaletteColor extends ColorPartial {}
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    gray: true
  }
}
