import { styled } from "@mui/material/styles";
import { motion } from "motion/react";

export const StyledSphere = styled(({ radius, color, ...props }: any) => (
  <motion.div {...props} />
))(({ theme, radius, color }) => ({
  position: "absolute",
  width: radius,
  height: radius,
  borderRadius: "50%",
  background: color,
  boxShadow: `inset -${radius / 20}px -${radius / 15}px ${radius / 10}px ${
    radius / 50
  }px rgba(0,0,0,.2)`,
}));
