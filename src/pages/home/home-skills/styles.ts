import { TAN } from '@/constants';
import { styled } from '@mui/material/styles';

export const StyledContent = styled('div')(({ theme }) => ({
  padding: '140px 80px 100px 80px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    padding: '110px 60px 100px 60px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '150px 30px 100px 30px',
  },
}));

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
    right: 0,
    transformOrigin: 'left bottom',

    '>div:first-of-type': {
      position: 'absolute',
      height: 750 / TAN,
      width: 750,
      bottom: 0,
      left: 0,
      background: '#5b46cc',

      '&:before': {
        content: '""',
        position: 'absolute',
        height: '90%',
        width: '90%',
        top: -1,
        right: -1,
        background: 'white',
        clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
      },
    },
  },

  '[data-shapes-2]': {
    position: 'absolute',
    left: 0,
    bottom: 0,

    '[data-id="c_1"]': {
      top: -259,
      left: 147,
    },
    '[data-id="c_2"]': {
      top: -260,
      left: 375,
    },
    '[data-id="c_3"]': {
      top: -107,
      left: 486,
    },
    '[data-id="c_4"]': {
      top: -98,
      left: 113,
    },
  },

  [theme.breakpoints.down('lg')]: {
    '[data-shapes-1]': {
      transform: 'scale(.85)',
    },
    '[data-shapes-2]': {
      transform: 'scale(.85)',
    },
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
