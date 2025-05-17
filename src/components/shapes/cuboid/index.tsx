import { StyledCuboid } from "./styles";

interface CuboidProps {
  width: number;
  height: number;
  length: number;
  front: string;
  left: string;
  top: string;
}

export default function Cuboid({ front, left, top, ...props }: CuboidProps) {
  return (
    <StyledCuboid {...props}>
      <div data-front style={{ background: front }} />
      <div data-left style={{ background: left }} />
      <div data-top style={{ background: top }} />
    </StyledCuboid>
  );
}
