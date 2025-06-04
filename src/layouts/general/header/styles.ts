import { alpha, styled } from '@mui/material/styles'

export const StyledLogo = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 40,
  insetInlineStart: 40,
  zIndex: theme.zIndex.appBar,

  [theme.breakpoints.down('md')]: {
    top: 16,
    insetInlineStart: 24,
  },
}))

export const StyledThemeButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 16,
  insetInlineEnd: 16,
  zIndex: theme.zIndex.fab,
  cursor: 'pointer',
  '>span': {
    display: 'flex',
  },
}))

export const StyledLangButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 65,
  insetInlineEnd: 16,
  zIndex: theme.zIndex.fab,

  '>span': {
    display: 'flex',
    cursor: 'pointer',
  },

  '>div': {
    position: 'absolute',
    top: '50%',
    insetInlineEnd: 0,
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',

    '>span': {
      padding: 4,
      height: 20 + 8,
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: theme.transitions.create('color'),
      color: alpha(theme.palette.text.primary, 0.5),

      '&[data-active=true]': {
        color: theme.palette.text.primary,
      },
    },
  },
}))
