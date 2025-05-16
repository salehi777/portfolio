import SmallTitle from "@/components/small-title";
import { StyledContent, StyledScroll, StyledWrapper } from "./styles";
import { Typography } from "@mui/material";
import SvgColor from "@/components/svg-color";

export default function HomeHello() {
  return (
    <StyledWrapper>
      <StyledContent>
        <SmallTitle title="سلام" />

        <Typography variant="h4" mt={2}>
          محمد صالحی، نزدیک به ۶ ساله برنامه‌نویسی وب رو به صورت حرفه‌ای دنبال
          میکنم.
        </Typography>

        <StyledScroll>
          <div>
            <SvgColor src="/icons/arrows-down.svg" />
          </div>
          <span>اسکرول کنید</span>
        </StyledScroll>
      </StyledContent>

      <div />
    </StyledWrapper>
  );
}
