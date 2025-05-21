import SmallTitle from "@/components/small-title";
import { StyledContent, StyledRow, StyledShapes } from "./styles";
import { Grid, Typography } from "@mui/material";
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
        {/* <SmallTitle title="مهارت‌ها" /> */}

        {skills.map(({ star, items }, idx) => (
          <StyledRow key={star} style={{ top: (idx + 1) * 140 }}>
            <div data-star>
              {[...new Array(star)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isInView ? { rotate: [0, i * (360 / star)] } : {}}
                  transition={{ duration: 1 }}
                >
                  <SvgColor
                    src="/icons/star.svg"
                    sx={{ transform: `rotate(-${i * (360 / star)}deg)` }}
                  />
                </motion.div>
              ))}
            </div>

            <div data-items>
              {items.map((title, i) => (
                <motion.div
                  key={i}
                  initial={{ x: "-100%", rotate: 0 }}
                  transformTemplate={({ y, x, rotate }) =>
                    `rotate(${rotate}) translateX(${x})`
                  }
                  animate={
                    isInView
                      ? {
                          rotate: [
                            0,
                            -i * 24 - (180 - 24 * (items.length - 1)) / 2,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1 }}
                >
                  <span>{title}</span>
                </motion.div>
              ))}
            </div>
          </StyledRow>
        ))}
      </StyledContent>
    </>
  );
}
