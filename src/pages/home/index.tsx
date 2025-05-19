"use client";

import { StyledDots, StyledSlider } from "./styles";
import useSlider from "./useSlider";
import Loading from "@/components/loading";
import { Box } from "@mui/material";

import HomeHello from "./home-hello";
import HomeIntroduction from "./home-introduction";
import HomeContacts from "./home-contacts";
import HomeExperience from "./home-experience";
import HomeSkills from "./home-skills";
import HomeLinks from "./home-links";

const titles = [
  "سلام",
  "معرفی",
  "سابقه",
  "مهارت",
  "لینک",
  "دیگر",
  //
];

export default function HomePage() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider();

  return (
    <div>
      <StyledSlider
        ref={sliderRef}
        className="keen-slider"
        style={{ visibility: loaded ? undefined : "hidden" }}
      >
        <div className="keen-slider__slide">
          <HomeHello isInView={currentSlide === 0} />
        </div>
        <div className="keen-slider__slide">
          <HomeIntroduction />
        </div>
        <div className="keen-slider__slide">
          <HomeContacts />
        </div>
        <div className="keen-slider__slide">
          <HomeExperience />
        </div>
        <div className="keen-slider__slide">
          <HomeSkills />
        </div>
        <div className="keen-slider__slide">
          <HomeLinks />
        </div>
      </StyledSlider>

      {/* {!loaded && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            right: "50%",
            transform: "translate(50%,-50%)",
            color:'red',
          }}
        >
          <Loading size={180} />
        </Box>
      )} */}

      {loaded && instanceRef.current && (
        <StyledDots>
          {titles.map((title, idx) => (
            <div
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              data-active={currentSlide === idx}
            >
              <span />
              <div>{title}</div>
            </div>
          ))}
        </StyledDots>
      )}
    </div>
  );
}
