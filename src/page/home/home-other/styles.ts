import { styled } from '@mui/material/styles';

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

    '.svg-color': { marginLeft: 12 },

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
      marginRight: 16,
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
}));

export const StyledShapes = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,

  '[data-shapes]': {
    position: 'absolute',
    left: 0,
    bottom: 0,

    '[data-id="c_1"]': {
      top: -414,
      left: 341,
    },
    '[data-id="c_2"]': {
      top: -562,
      left: 220,
    },
    '[data-id="c_3"]': {
      top: -348,
      left: 98,
    },
    '[data-id="c_4"]': {
      top: -275,
      left: 220,
    },
    '[data-id="s_1"]': {
      top: -439,
      left: 200,
    },
    '[data-id="s_2"]': {
      top: -571,
      left: 326,
    },
    '[data-id="s_3"]': {
      top: -490,
      left: 86,
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
}));
