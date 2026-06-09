import type { Components } from '@mui/material/styles'

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: { boxShadow: 'none !important', textTransform: 'unset' },
    },
  },
  MuiIconButton: { styleOverrides: { root: { color: 'inherit', padding: 4 } } },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      autoComplete: 'off',
      slotProps: { inputLabel: { shrink: true } },
    },
  },
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
}

export default components
