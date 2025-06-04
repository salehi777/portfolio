import { keyframes, styled } from '@mui/material/styles'

export const StyledSlider = styled('div')(({ theme }) => ({
  height: '100vh',
}))

export const StyledDots = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: 16,
  insetInlineStart: 16,

  '>div': {
    position: 'absolute',
    top: -108,
    insetInlineStart: -8,
    transformOrigin: 'center 108px',
    cursor: 'pointer',

    ...Object.fromEntries(
      [0, 1, 2, 3, 4, 5].map((i) => {
        const coefficient = theme.direction === 'ltr' ? 1 : -1
        return [
          `&:nth-of-type(${i + 1})`,
          { animation: `${rotate(i * 18 * coefficient)} 1s ease forwards` },
        ]
      })
    ),

    span: {
      width: 16,
      height: 16,
      borderRadius: '100%',
      display: 'block',
      background: '#b0b0b0',
      transition: theme.transitions.create('background'),
    },

    div: {
      position: 'absolute',
      transition: theme.transitions.create('color'),
      color: '#b0b0b0',
      whiteSpace: 'nowrap',
      transform: theme.direction === 'ltr' ? 'rotate(-90deg)' : 'rotate(90deg)',
      transformOrigin: theme.direction === 'ltr' ? 'left top' : 'right top',
      top: 0,
      insetInlineStart: 'calc(50% - 12px)',
      padding: '0px 12px',
      userSelect: 'none',
      outline: 'none',
    },

    '&[data-active=true]': {
      span: {
        background: theme.palette.primary.main,
      },
      div: {
        color: theme.palette.primary.main,
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const rotate = (angle) => keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(${angle}deg);
  }
`
