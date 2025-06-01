import { styled } from '@mui/material/styles'

export const StyledLogo = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 40,
  right: 40,
  zIndex: theme.zIndex.appBar,
}))

export const StyledThemeButton = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 16,
  left: 16,
  zIndex: theme.zIndex.fab,
  cursor: 'pointer',
  '>span': {
    display: 'block',
  },
}))
