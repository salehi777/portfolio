import { styled } from '@mui/material/styles'

export const StyledGrid = styled('div')(({}) => ({
  position: 'absolute',
  '&::before': {
    content: "''",
    position: 'absolute',
    height: '400px',
    top: '-200px',
    width: 1,
    background: '#000',
    zIndex: 1,
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    width: '400px',
    left: '-200px',
    height: 1,
    background: '#000',
    zIndex: 1,
  },
}))

export const StyledList = styled('div')(({ theme }) => ({
  '>div': {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    height: 0,

    '>div': {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      userSelect: 'none',
      color: theme.palette.gray[400],
      transition: theme.transitions.create('color'),
      whiteSpace: 'nowrap',

      '>span': {
        display: 'block',
        borderRadius: '100%',
        background: 'currentColor',
      },

      '&[data-active=true]': { color: theme.palette.primary.main },
    },
  },

  '&[data-clockwise="true"]': {
    '>div': {
      left: 0,
      transformOrigin: '0 center',
    },
  },

  '&[data-clockwise="false"]': {
    '>div': {
      right: 0,
      transformOrigin: '100% center',
      '>div': {
        flexDirection: theme.direction === 'ltr' ? 'row-reverse' : undefined,
      },
    },
  },
}))
