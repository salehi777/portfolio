import { GlobalStyles } from '@mui/material'

export default function AppGlobalStyles() {
  return (
    <GlobalStyles
      styles={{
        a: { textDecoration: 'none', color: 'inherit' },
        ul: { margin: 0, padding: 0, listStyleType: 'none' },
        p: { margin: 0 },
        img: { display: 'block', maxWidth: '100%' },
        input: { WebkitTapHighlightColor: 'transparent' },
        'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
      }}
    />
  )
}
