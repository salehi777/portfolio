import type { TypographyVariantsOptions } from '@mui/material/styles'

// clamp(16px, calc(16px + (32px - 16px) * ((100vw - 500px) / (1500px - 500px))), 32px)
const getResponsiveFontSize = (
  f: [number, number],
  w: [number, number] = [500, 1500],
) => `clamp(
  ${f[0]}px,
  calc(
    ${f[0]}px +
    (${f[1]}px - ${f[0]}px) *
    (
      (100vw - ${w[0]}px) /
      (${w[1]}px - ${w[0]}px)
    )
  ),
  ${f[1]}px)`

const typography: TypographyVariantsOptions = {
  fontFamily: 'Vazirmatn, sans-serif',

  h1: { fontSize: 90, fontWeight: 600 },
  h2: { fontSize: 60, fontWeight: 600 },
  h3: { fontSize: 38, fontWeight: 600 },
  h4: { fontSize: getResponsiveFontSize([22, 24]), fontWeight: 600 },
  h5: {
    fontSize: getResponsiveFontSize([18, 20]),
    fontWeight: 500,
    lineHeight: 'inherit',
  },
  h6: { fontSize: 18, fontWeight: 500 },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  caption: { fontSize: 12 },
  button: { fontWeight: 400 },
}

export default typography
