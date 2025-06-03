import { alpha, styled } from '@mui/material/styles'

export const StyledLogo = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 40,
  right: 40,
  zIndex: theme.zIndex.appBar,

  [theme.breakpoints.down('md')]: {
    top: 16,
    right: 24,
  },
}))

export const StyledThemeButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 16,
  left: 16,
  zIndex: theme.zIndex.fab,
  cursor: 'pointer',
  '>span': {
    display: 'flex',
  },
}))

export const StyledLangButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 65,
  left: 16,
  zIndex: theme.zIndex.fab,

  '>div': {
    display: 'flex',
    cursor: 'pointer',
  },

  '>span': {
    position: 'absolute',
    top: 0,
    left: 6,
    transformOrigin: '6px 15px',
    height: 36,
    transition: theme.transitions.create('color'),
    color: alpha(theme.palette.text.primary, 0.5),
    whiteSpace: 'nowrap',
    padding: 6,
    userSelect: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,

    '>span': {
      height: 24,
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: -4,
      width: 5,
      height: 5,
      borderRadius: '100%',
      transition: theme.transitions.create('background'),
      background: alpha(theme.palette.text.primary, 0.5),
    },

    '&[data-active=true]': {
      color: theme.palette.text.primary,
      '&:before': {
        background: theme.palette.text.primary,
      },
    },
  },
}))
