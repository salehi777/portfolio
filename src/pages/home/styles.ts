import { keyframes, styled } from '@mui/material/styles'

export const StyledSlider = styled('div')(({}) => ({
  height: '100vh',
  '@supports (height: 100dvh)': { height: '100dvh' },
}))
