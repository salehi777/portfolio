import { styled } from '@mui/material/styles';

export const StyledHeader = styled('header')(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  zIndex: theme.zIndex.appBar,
  height: 120,
  display: 'flex',
  alignItems: 'center',
  padding: '0 60px',
}));
