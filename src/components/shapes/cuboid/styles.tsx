import { styled } from "@mui/material/styles";
import { motion } from "motion/react";

export const StyledCuboid = styled(
  ({ width, height, length, ...props }: any) => (
    <motion.div
      transformTemplate={(_, generated) =>
        `rotateX(-26deg) rotateY(45deg) ${generated}`
      }
      {...props}
    />
  )
)(({ theme, width, height, length }) => ({
  position: "absolute",
  transformStyle: "preserve-3d",
  // transform: "rotateX(-26deg) rotateY(45deg)"

  ">div": {
    position: "absolute",
  },

  "[data-front]": {
    width,
    height,
    transform: `translateY(${-height / 2}px) translateX(${
      width / 2
    }px) translateZ(${length / 2}px)`,
  },
  "[data-left]": {
    width: length,
    height,
    transform: `translateY(${-height / 2}px) translateX(${
      length / 2 - width / 2
    }px) rotateY(-90deg)`,
  },
  "[data-top]": {
    width,
    height: length,
    transform: `translateY(${-length / 2 - height / 2}px) translateX(${
      width / 2
    }px) rotateX(90deg)`,
  },
}));
