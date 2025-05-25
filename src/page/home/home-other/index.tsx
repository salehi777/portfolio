import SmallTitle from "@/components/small-title";
import { StyledContent, StyledLinks, StyledList, StyledShapes } from "./styles";
import { Divider, Typography } from "@mui/material";
import SvgColor from "@/components/svg-color";
import Cuboid from "@/components/shapes/cuboid";
import { cuboids, spheres } from "./data";
import Sphere from "@/components/shapes/sphere";
import MotionUp from "@/components/motion-up";
import { motion } from "motion/react";
import Image from "next/image";

export default function HomeOther({ isInView }) {
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
          <SmallTitle title="دیگر" />
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
          <StyledList>
            <div>
              <SvgColor src="/icons/info.svg" />
              <Typography variant="h5">
                در سمت بک اند کمی با Express.JS و کمی بیشتر با DJango کار کردم
              </Typography>
            </div>

            <div>
              <SvgColor src="/icons/info.svg" />
              <Typography variant="h5">
                با ReactNative آشنایی دارم
              </Typography>
            </div>

            <div>
              <SvgColor src="/icons/info.svg" />
              <Typography variant="h5">
                ساختار داده‌ها، الگوریتم و دیزاین پترن‌ها را در حد دروس دانشگاه
                یاد گرفته بودم(البته تقریبا ۷ سالی گذشته)
              </Typography>
            </div>

            <div>
              <SvgColor src="/icons/info.svg" />
              <Typography variant="h5">
                با ابزارهای کمکی AI آشنایی دارم
              </Typography>
            </div>
          </StyledList>
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.2 }}>
          <Divider sx={{ my: 4 }} height={2} />
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.3 }}>
          <StyledLinks>
            <div>
              <Typography variant="h6">کد این سایت:</Typography>
              <a
                href="https://github.com/salehi777/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  width={40}
                  height={40}
                  alt="github logo"
                />
              </a>
            </div>

            <div>
              <Typography variant="h6">ایده‌های طراحی:</Typography>
              <a
                href="https://dribbble.com/shots/14013010-Folio-Designer-Portfolio-Kit-Animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/dribbble.svg"
                  width={40}
                  height={40}
                  alt="dribbble logo"
                />
              </a>
              <a
                href="https://dribbble.com/shots/422424-Skills-Dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/dribbble.svg"
                  width={40}
                  height={40}
                  alt="dribbble logo"
                />
              </a>
            </div>
          </StyledLinks>
        </MotionUp>
      </StyledContent>
    </>
  );
}
