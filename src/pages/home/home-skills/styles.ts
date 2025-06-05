import { TAN } from '@/constants'
import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({ theme }) => ({
  padding: '140px 80px 100px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    padding: '110px 60px 100px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '150px 30px 100px',
  },
}))

export const StyledSkill = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: 120,
  height: 120,

  svg: {
    width: '100%',
    height: '100%',

    path: {
      stroke: theme.palette.primary.main,
      strokeLinecap: 'round',
      strokeWidth: 1,
    },
  },

  div: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%',
    left: '10%',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
    textAlign: 'center',
    margin: '0 auto',
    fontSize: 20,
    lineHeight: 1,
  },

  span: {
    position: 'absolute',
    fontSize: 10,
    color: theme.palette.primary.main,
    height: 15,
    right: '50%',
    top: 0,
    transformOrigin: `center ${120 / 2 + 15 / 2}px`,
  },

  [theme.breakpoints.down('md')]: {
    width: 110,
    height: 110,
    div: {
      fontSize: 16,
    },
    span: {
      transformOrigin: `center ${110 / 2 + 15 / 2}px`,
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
    bottom: 0,

    '[data-id="c_1"]': {
      top: -219,
      insetInlineEnd: 97,
    },
    '[data-id="c_2"]': {
      top: -198,
      insetInlineEnd: 325,
    },
    '[data-id="c_3"]': {
      top: -57,
      insetInlineEnd: 436,
    },
    '[data-id="c_4"]': {
      top: -58,
      insetInlineEnd: 133,
    },
  },

  [theme.breakpoints.down('lg')]: {
    '[data-shapes]': {
      transform: 'scale(.85)',
    },
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
