import { StyledSphere } from "./styles";

interface SphereProps {
  radius: number;
  color: string;
}

export default function Sphere(props: SphereProps) {
  return <StyledSphere {...props}></StyledSphere>;
}
