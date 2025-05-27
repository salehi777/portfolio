import SmallTitle from "@/components/small-title";
import { StyledContent, StyledShapes, StyledSkill } from "./styles";
import { Grid } from "@mui/material";
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
        <MotionUp isActive={isInView}>
          <SmallTitle title="مهارت‌ها" />
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
          <Grid
            container
            rowSpacing={{ xs: 1.5, lg: 3 }}
            columnSpacing={{ xs: 1.5, lg: 3 }}
            mt={{ xs: 2, lg: 4 }}
          >
            {skills.map(({ title, percent }) => (
              <Grid key={title}>
                <StyledSkill>
                  <svg viewBox="0 0 36 36" fill="none">
                    <motion.path
                      d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                      animate={
                        isInView
                          ? { strokeDasharray: ["0 100", `${percent} 100`] }
                          : {}
                      }
                      transition={{ duration: 1 }}
                    />
                  </svg>

                  <div>{title}</div>
                  <motion.span
                    animate={
                      isInView ? { rotate: [0, (percent * 360) / 100] } : {}
                    }
                    transformTemplate={(_, generated) =>
                      `translateY(-50%) translateX(50%) ${generated}`
                    }
                    transition={{ duration: 1 }}
                  >
                    {percent}%
                  </motion.span>
                </StyledSkill>
              </Grid>
            ))}
          </Grid>
        </MotionUp>
      </StyledContent>
    </>
  );
}
