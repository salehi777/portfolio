import { StyledCuboid } from "./styles";

interface CuboidProps {
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
