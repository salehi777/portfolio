import { styled } from '@mui/material/styles';

export const StyledContent = styled('div')(({ theme }) => ({
  padding: '160px 120px 100px 120px',
  maxWidth: 1400,
  margin: '0 auto',

  [theme.breakpoints.down('lg')]: {
    padding: '160px 90px 100px 90px',
  },
}));

export const StyledJob = styled('div')(({ theme }) => ({
  boxShadow: '#b5b5b5 0px 3px 8px',
  padding: '16px 24px 4px',
  borderRadius: 16,
  height: '100%',

  '>div': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,

    '>div': {
      margin: '0 8px',
    },

    a: {
      display: 'flex',
      marginRight: 4,
      color: theme.palette.info.main,
      '.svg-color': { width: 16, height: 16 },
    },

    '&:nth-of-type(2)': {
      color: theme.palette.grey[600],
    },
  },
}));
