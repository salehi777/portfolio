import { styled } from '@mui/material/styles';

export const StyledDots = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 30,

  '>div': {
    cursor: 'pointer',
    margin: '0 4px',
    minWidth: 8,
    height: 8,
    borderRadius: '100%',
    background: '#b0b0b0',
    transition: theme.transitions.create('background'),

    '&[data-active=true]': {
      background: theme.palette.primary.main,
    },
  },
}));
