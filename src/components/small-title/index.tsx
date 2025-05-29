import { BoxProps, Typography } from '@mui/material';
import { StyledSmallTitle } from './styles';

interface SmallTitleProps extends BoxProps {
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
