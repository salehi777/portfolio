import { StyledSlider } from './styles'
import useSlider from './useSlider'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import HomeHello from './home-hello'
import HomeIntroduction from './home-introduction'
import HomeExperience from './home-experience'
import HomeSkills from './home-skills'
import HomeProjects from './home-projects'
import HomeOther from './home-other'
import ListCircle from '@/components/ui/list-circle'
import { Box } from '@mui/material'
import useSettingsStore from '@/stores/useSettingsStore'

export default function HomePage() {
  const { t } = useTranslation()
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider()
  const direction = useSettingsStore((s) => s.direction)

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
        <Box sx={{ position: 'fixed', bottom: 16, insetInlineStart: 16 }}>
          <ListCircle
            degree={direction === 'ltr' ? [-90, 0] : [90, 180]}
            clockwise={direction === 'ltr'}
            activeValue={currentSlide}
            size={16}
            translate={80}
            list={[
              t('home.titles.0'),
              t('home.titles.1'),
              t('home.titles.2'),
              t('home.titles.3'),
              t('home.titles.4'),
              t('home.titles.5'),
            ].map((label, i) => ({
              label,
              value: i,
              onClick: () => instanceRef.current?.moveToIdx(i),
            }))}
          />
        </Box>
      )}
    </div>
  )
}
