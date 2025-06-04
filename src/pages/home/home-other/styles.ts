import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({ theme }) => ({
  width: 'calc(100vw - 450px)',
  height: '100%',
  padding: '140px 100px 100px 100px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '[data-list-item]': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,

    '.svg-color': { marginInlineEnd: 12 },

    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      height: '100%',
      minHeight: 150,
    },
  },

  '[data-link-item]': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,

    a: {
      marginInlineStart: 16,
      '.svg-color': { width: 56, height: 56 },
    },
  },

  [theme.breakpoints.down('lg')]: {
    width: 'calc(100vw - 350px)',
    padding: '140px 60px 100px 60px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '140px 30px 100px 30px',
    justifyContent: 'center',
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
    bottom: 0,

    '[data-id="c_1"]': {
      top: -464,
      insetInlineEnd: 341,
    },
    '[data-id="c_2"]': {
      top: -632,
      insetInlineEnd: 220,
    },
    '[data-id="c_3"]': {
      top: -398,
      insetInlineEnd: 98,
    },
    '[data-id="c_4"]': {
      top: -255,
      insetInlineEnd: 220,
    },
    '[data-id="s_1"]': {
      top: -459,
      insetInlineEnd: 200,
    },
    '[data-id="s_2"]': {
      top: -621,
      insetInlineEnd: 326,
    },
    '[data-id="s_3"]': {
      top: -540,
      insetInlineEnd: 86,
    },
  },

  [theme.breakpoints.down('lg')]: {
    '[data-shapes]': {
      transform: 'scale(.9)',
    },
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
