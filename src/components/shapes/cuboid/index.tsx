import type { BoxProps } from '@mui/material';
import { StyledCuboid } from './styles';

export interface CuboidProps extends BoxProps {
  width: number;
  height: number;
  length: number;
  color: string;
}

export default function Cuboid(props: CuboidProps) {
  return (
    <StyledCuboid {...props}>
      <div data-front />
      <div data-left />
      <div data-top />
    </StyledCuboid>
  );
}
