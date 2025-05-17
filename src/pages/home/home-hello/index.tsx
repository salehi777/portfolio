import SmallTitle from "@/components/small-title";
import { StyledContent, StyledShapes } from "./styles";
import { Typography } from "@mui/material";
import SvgColor from "@/components/svg-color";
import Cuboid from "@/components/shapes/cuboid";
import { cuboids } from "./shapes-info";

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
                    transition: { duration: 2, type: "linear" },
                    animate: isInView ? animateInfo : null,
                  }
                : {})}
            />
          ))}
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
