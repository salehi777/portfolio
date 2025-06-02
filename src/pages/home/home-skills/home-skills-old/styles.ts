import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({ theme }) => ({
  padding: '140px 140px 100px 100px',
  position: 'relative',
}))

export const StyledRow = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',

  '[data-star]': {
    position: 'relative',
    color: '#ed6c02',
    '>div': {
      position: 'absolute',
      left: -32,
      top: -12,
      transformOrigin: '32px center',
      display: 'flex',
    },
  },
  '[data-items]': {
    position: 'relative',
    color: '#0000ff',
    transform: 'rotate(90deg)',
    '>div': {
      position: 'absolute',
      left: 0,
      top: -12,
      transformOrigin: '0px center',
      display: 'flex',
      span: {
        display: 'flex',
        fontSize: 20,
        fontWeight: 700,
        transform: 'translateX(-50px)',
        whiteSpace: 'nowrap',
      },
    },
  },
}))
