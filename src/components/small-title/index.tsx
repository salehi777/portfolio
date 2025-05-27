import { Typography } from '@mui/material';
import { StyledSmallTitle } from './styles';

interface SmallTitleProps {
  title: React.ReactNode;
}

export default function SmallTitle({ title }: SmallTitleProps) {
  return (
    <StyledSmallTitle>
      <span />
      <Typography variant="h6" color="primary.main">
        {title}
      </Typography>
    </StyledSmallTitle>
  );
}
