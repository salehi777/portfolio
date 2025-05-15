"use client";

import { StyledDots, StyledSlider } from "./styles";
import useSlider from "./useSlider";

export default function HomePage() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider();

  return (
    <div>
      <StyledSlider ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">1</div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
        <div className="keen-slider__slide">4</div>
        <div className="keen-slider__slide">5</div>
        <div className="keen-slider__slide">6</div>
      </StyledSlider>

      {loaded && instanceRef.current && (
        <StyledDots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <span
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              data-active={currentSlide === idx}
            />
          ))}
        </StyledDots>
      )}
    </div>
  );
}
