import SmallTitle from "@/components/small-title";
import { StyledContent, StyledRow, StyledShapes } from "./styles";
import { Typography } from "@mui/material";
import SvgColor from "@/components/svg-color";
import Cuboid from "@/components/shapes/cuboid";
import { cuboids, skills } from "./data";
import MotionUp from "@/components/motion-up";
import { motion } from "motion/react";

export default function HomeSkills({ isInView }) {
  return (
    <>
      <StyledShapes>
        <div data-shapes-1>
          <div />
        </div>

        <div data-shapes-2>
          {cuboids.map(({ id, animateInfo, ...cuboid }) => (
            <Cuboid
              key={id}
              data-id={id}
              {...cuboid}
              {...(animateInfo
                ? {
                    component: motion.div,
                    transformTemplate: (_, generated) =>
                      `rotateX(-26deg) rotateY(45deg) ${generated}`,
                    transition: { duration: 1 },
                    animate: isInView ? animateInfo : {},
                  }
                : {})}
            />
          ))}
        </div>
      </StyledShapes>

      <StyledContent>
        <SmallTitle title="مهارت‌ها" />

        {skills.map(({ star, items }) => (
          <StyledRow key={star}>
            <div>
              {[...new Array(star)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={
                    isInView
                      ? {
                          rotate: [0, i * (360 / star)],
                          ...(star === 1 ? { x: [0, 20] } : {}),
                        }
                      : {}
                  }
                  transition={{ duration: 1 }}
                >
                  <SvgColor
                    src="/icons/star.svg"
                    sx={{ transform: `rotate(-${i * (360 / star)}deg)` }}
                  />
                </motion.div>
              ))}
            </div>
            <div>
              {items.map((title, i) => (
                <Typography key={title} variant="h5">
                  {i !== 0 && "،"} {title}
                </Typography>
              ))}
            </div>
          </StyledRow>
        ))}
      </StyledContent>
    </>
  );
}
