'use client';

import { StyledDots, StyledSlider } from './styles';
import useSlider from './useSlider';

import HomeHello from './home-hello';
import HomeIntroduction from './home-introduction';
import HomeExperience from './home-experience';
import HomeSkills from './home-skills';
import HomeLinks from './home-links';
import HomeOther from './home-other';

const titles = [
  'سلام',
  'معرفی',
  'مهارت',
  'سابقه',
  'لینک',
  'دیگر',
  //
];

export default function HomePage() {
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider();

  return (
    <div>
      <StyledSlider
        ref={sliderRef}
        className="keen-slider"
        style={{
          visibility: loaded ? undefined : 'hidden',
          userSelect: 'unset',
        }}
      >
        <div className="keen-slider__slide">
          <HomeHello isInView={currentSlide === 0} />
        </div>
        <div className="keen-slider__slide">
          <HomeIntroduction loaded={loaded} isInView={currentSlide === 1} />
        </div>
        <div className="keen-slider__slide">
          <HomeSkills loaded={loaded} isInView={currentSlide === 2} />
        </div>
        <div className="keen-slider__slide">
          <HomeExperience loaded={loaded} isInView={currentSlide === 3} />
        </div>
        <div className="keen-slider__slide">
          <HomeLinks loaded={loaded} isInView={currentSlide === 4} />
        </div>
        <div className="keen-slider__slide">
          <HomeOther loaded={loaded} isInView={currentSlide === 5} />
        </div>
      </StyledSlider>

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
