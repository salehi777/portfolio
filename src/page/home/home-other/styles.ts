import { TAN } from '@/constants';
import { styled } from '@mui/material/styles';

export const StyledContent = styled('div')(({ theme }) => ({
  width: 'calc(100vw - 450px)',
  padding: '160px 140px 100px 100px',
  position: 'relative',
}));

export const StyledList = styled('div')(({ theme }) => ({
  '>div': {
    display: 'flex',
    alignItems: 'center',
    marginTop: 24,
    '.svg-color': { marginLeft: 12 },
  },
}));

export const StyledLinks = styled('div')(({ theme }) => ({
  '>div': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,

    a: {
      marginRight: 16,
      '.svg-color': { width: 56, height: 56 },
    },
  },
}));

export const StyledShapes = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,

  '[data-shapes-1]': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,

    '>div': {
      position: 'absolute',
      height: 600,
      width: 600,
      bottom: 100,
      left: -100,
      background: '#5b46cc',
      borderRadius: '100%',
    },
  },

  '[data-shapes-2]': {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },

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
}));
