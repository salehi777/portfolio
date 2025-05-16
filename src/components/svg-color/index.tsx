import { BoxProps } from "@mui/material";
import { StyledSvgColor } from "./styles";

interface SvgColorProps extends BoxProps {
  src: string;
}

export default function SvgColor({ src, component = "span", ...props }: SvgColorProps) {
  return (
    <StyledSvgColor
      component={component}
      className="svg-color"
      style={{
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
      }}
      {...props}
    />
  );
}
