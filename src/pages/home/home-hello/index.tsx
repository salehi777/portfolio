import SmallTitle from '@/components/small-title';
import { StyledContent, StyledShapes } from './styles';
import { Typography } from '@mui/material';
import SvgColor from '@/components/svg-color';
import Cuboid from '@/components/shapes/cuboid';
import { cuboids, spheres } from './data';
import Sphere from '@/components/shapes/sphere';
import MotionUp from '@/components/motion-up';
import { motion } from 'motion/react';

export default function HomeHello({ isInView }) {
  return (
    <>
      <StyledShapes>
        <div data-shapes-1>
          <div />
          <div>
            <div />
          </div>
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
          {spheres.map(({ id, animateInfo, ...sphere }) => (
            <Sphere
              key={id}
              data-id={id}
              {...sphere}
              {...(animateInfo
                ? {
                    component: motion.div,
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
          <SmallTitle title="سلام" />
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
          <Typography variant="h4" mt={2}>
            محمد صالحی، نزدیک به ۶ ساله برنامه‌نویسی وب رو به صورت حرفه‌ای دنبال
            میکنم.
          </Typography>
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.2 }}>
          <div data-scroll>
            <div>
              <SvgColor src="/icons/arrows-down.svg" />
            </div>
            <span>اسکرول کنید</span>
            <span>صفحه را به بالا بکشید</span>
          </div>
        </MotionUp>
      </StyledContent>
    </>
  );
}
