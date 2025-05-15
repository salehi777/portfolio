"use client";

import { StyledDots, StyledSlider } from "./styles";
import useSlider from "./useSlider";

import HomeHello from "./home-hello";
import HomeIntroduction from "./home-introduction";
import HomeContacts from "./home-contacts";
import HomeExperience from "./home-experience";
import HomeEducation from "./home-education";
import HomeSkills from "./home-skills";
import HomeLinks from "./home-links";

const sections = ["سلام", "تماس", "سابقه", "تحصیل", "مهارت", "لینک"];

export default function HomePage() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider();

  return (
    <div>
      <StyledSlider ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <HomeHello />
        </div>
        <div className="keen-slider__slide">
          <HomeIntroduction />
        </div>
        {/* <div className="keen-slider__slide">
          <HomeContacts />
        </div>
        <div className="keen-slider__slide">
          <HomeExperience />
        </div>
        <div className="keen-slider__slide">
          <HomeEducation />
        </div>
        <div className="keen-slider__slide">
          <HomeSkills />
        </div>
        <div className="keen-slider__slide">
          <HomeLinks />
        </div> */}
      </StyledSlider>

      {/* {loaded && instanceRef.current && (
        <StyledDots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <div
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              data-active={currentSlide === idx}
            >
              <span />
              <div>{sections[idx]}</div>
            </div>
          ))}
        </StyledDots>
      )} */}
    </div>
  );
}
