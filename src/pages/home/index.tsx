import { StyledDots, StyledSlider } from './styles'
import useSlider from './useSlider'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

import HomeHello from './home-hello'
import HomeIntroduction from './home-introduction'
import HomeExperience from './home-experience'
import HomeSkills from './home-skills'
import HomeProjects from './home-projects'
import HomeOther from './home-other'

export default function HomePage() {
  const { t } = useTranslation()
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider()

  const [loaded2, setLoaded2] = useState(false)
  useEffect(() => {
    if (loaded) setTimeout(() => setLoaded2(true), 1000)
  }, [loaded])

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
          {loaded2 && <HomeIntroduction isInView={currentSlide === 1} />}
        </div>
        <div className="keen-slider__slide">
          {loaded2 && <HomeSkills isInView={currentSlide === 2} />}
        </div>
        <div className="keen-slider__slide">
          {loaded2 && <HomeExperience isInView={currentSlide === 3} />}
        </div>
        <div className="keen-slider__slide">
          {loaded2 && <HomeProjects isInView={currentSlide === 4} />}
        </div>
        <div className="keen-slider__slide">
          {loaded2 && <HomeOther isInView={currentSlide === 5} />}
        </div>
      </StyledSlider>

      {loaded && instanceRef.current && (
        <StyledDots>
          {[
            t('home.titles.0'),
            t('home.titles.1'),
            t('home.titles.2'),
            t('home.titles.3'),
            t('home.titles.4'),
            t('home.titles.5'),
          ].map((title, idx) => (
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
  )
}
