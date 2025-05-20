import { BoxProps } from "@mui/material";
import { StyledSphere } from "./styles";

export interface SphereProps extends BoxProps {
  radius: number;
  color: string;
}

export default function Sphere(props: SphereProps) {
  return <StyledSphere {...props}></StyledSphere>;
}
