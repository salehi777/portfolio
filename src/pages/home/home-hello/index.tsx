import SmallTitle from "@/components/small-title";
import { StyledContent, StyledShapes } from "./styles";
import { Typography } from "@mui/material";
import SvgColor from "@/components/svg-color";
import Cuboid from "@/components/shapes/cuboid";
import { cuboids, spheres } from "./shapes-info";
import Sphere from "@/components/shapes/sphere";

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
          <div data-cuboids>
            {cuboids.map(({ id, animateInfo, ...cuboid }) => (
              <Cuboid
                key={id}
                data-id={id}
                {...cuboid}
                {...(animateInfo
                  ? {
                      transition: { duration: 1 },
                      animate: isInView ? animateInfo : null,
                    }
                  : {})}
              />
            ))}
          </div>
          <div data-spheres>
            {spheres.map(({ id, animateInfo, ...sphere }) => (
              <Sphere
                key={id}
                data-id={id}
                {...sphere}
                {...(animateInfo
                  ? {
                      transition: { duration: 1 },
                      animate: isInView ? animateInfo : null,
                    }
                  : {})}
              />
            ))}
          </div>
        </div>
      </StyledShapes>

      <StyledContent>
        <SmallTitle title="سلام" />

        <Typography variant="h4" mt={2}>
          محمد صالحی، نزدیک به ۶ ساله برنامه‌نویسی وب رو به صورت حرفه‌ای دنبال
          میکنم.
        </Typography>

        <div>
          <div>
            <SvgColor src="/icons/arrows-down.svg" />
          </div>
          <span>اسکرول کنید</span>
        </div>
      </StyledContent>
    </>
  );
}
