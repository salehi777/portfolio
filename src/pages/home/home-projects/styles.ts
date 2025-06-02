import { styled } from '@mui/material/styles'

export const StyledContent = styled('div')(({ theme }) => ({
  height: '100%',
  padding: '120px 120px 100px 120px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 1400,
  margin: '0 auto',

  [theme.breakpoints.down('lg')]: {
    padding: '120px 90px 100px 90px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '120px 40px 100px 40px',
  },
}))

export const StyledProject = styled('div')(({ theme }) => ({
  height: '100%',
  padding: 10,

  a: {
    boxShadow: '#b5b5b5 0px 3px 8px',
    borderRadius: 16,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',

    '>span': {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: 300,
      width: '100%',
      display: 'block',
    },

    '>div': {
      padding: '24px 16px 8px',
      background: '#e9e9e9',
      flex: 1,
      color: '#0f0f0f',
    },
  },
}))
