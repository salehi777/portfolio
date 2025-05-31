import {  Typography, type BoxProps } from '@mui/material';
import { StyledSmallTitle } from './styles';

interface SmallTitleProps extends Omit<BoxProps, 'title'> {
  title: React.ReactNode;
}

export default function SmallTitle({ title, ...props }: SmallTitleProps) {
  return (
    <StyledSmallTitle {...props}>
      <span />
      <Typography variant="h6" color="primary.main">
        {title}
      </Typography>
    </StyledSmallTitle>
  );
}
