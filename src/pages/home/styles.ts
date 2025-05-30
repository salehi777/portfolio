import { keyframes, styled } from '@mui/material/styles';

export const StyledSlider = styled('div')(({ theme }) => ({
  height: '100vh',
}));

export const StyledDots = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: 8,
  right: 8,

  '>div': {
    position: 'absolute',
    top: -100,
    transformOrigin: '0 100px',
    cursor: 'pointer',

    '&:nth-of-type(2)': {
      animation: `${rotate(-18)} 1s ease forwards`,
    },
    '&:nth-of-type(3)': {
      animation: `${rotate(-36)} 1s ease forwards`,
    },
    '&:nth-of-type(4)': {
      animation: `${rotate(-54)} 1s ease forwards`,
    },
    '&:nth-of-type(5)': {
      animation: `${rotate(-72)} 1s ease forwards`,
    },
    '&:nth-of-type(6)': {
      animation: `${rotate(-90)} 1s ease forwards`,
    },

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
      transform: 'rotate(90deg)',
      transformOrigin: '100% 0%',
      top: 0,
      right: 'calc(50% - 12px)',
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
}));

const rotate = (angle) => keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(${angle}deg);
  }
`;
