import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({ theme }) => ({
  width: 'calc(100vw - 350px)',
  height: '100%',
  padding: '160px 140px 100px 100px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '[data-list]': {
    display: 'flex',
    flexDirection: 'column',

    div: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 20,
      marginBottom: 16,
      marginInlineStart: 58,

      '&:before': {
        content: '""',
        height: 2,
        width: 22,
        marginInlineEnd: 14,
        display: 'block',
        background: theme.palette.text.primary,
      },
    },

    [theme.breakpoints.down('sm')]: {
      div: {
        marginInlineStart: 0,
      },
    },
  },

  '[data-contacts]': {
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    a: {
      display: 'flex',
      alignItems: 'center',

      '.svg-color': { width: 30, height: 30, marginInlineEnd: 8 },

      div: {
        direction: 'ltr',
      },

      '&:first-of-type': {
        marginBottom: 12,
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    width: 'calc(100vw - 275px)',
    padding: '140px 75px 100px 75px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '100px 30px 100px 30px',
    justifyContent: 'center',

    '[data-contacts]': {
      height: '100%',
    },
  },
}))

export const StyledShapes = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  insetInlineStart: 0,

  '[data-shapes]': {
    position: 'absolute',
    insetInlineEnd: 0,
    top: 0, // in home-hello it's bottom:0 because shapes designed from bottom
    '[data-id="c_1"]': {
      top: 343,
      insetInlineEnd: 0,
    },
    '[data-id="c_2"]': {
      top: 678,
      insetInlineEnd: 340,
    },
    '[data-id="c_3"]': {
      top: 381,
      insetInlineEnd: 341,
    },
  },

  [theme.breakpoints.down('lg')]: {
    '[data-shapes]': {
      top: 50,
      transform: 'scale(.8)',
    },
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
