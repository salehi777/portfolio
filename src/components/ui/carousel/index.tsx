import { useKeenSlider, type KeenSliderOptions } from 'keen-slider/react'
import { StyledDots } from './styles'
import { useMemo, useState } from 'react'
import { useTheme } from '@mui/material'
import 'keen-slider/keen-slider.min.css'

interface CarouselProps {
  children: (React.ReactElement | React.ReactElement[])[]
  perViews?: {
    breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    perView: number
  }[]
  options?: KeenSliderOptions
}

export default function Carousel({
  children,
  perViews,
  options,
}: CarouselProps) {
  const theme = useTheme()
  const [_, refresh] = useState(false)

  const breakpoints = useMemo(
    () =>
      Object.fromEntries(
        perViews?.map(({ breakpoint, perView }) => [
          theme.breakpoints.up(breakpoint).replace('@media ', ''),
          { slides: { perView } },
        ]) || [],
      ),
    [perViews],
  )

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: theme.direction === 'rtl',
    breakpoints,
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
    created: () => setLoaded(true),
    optionsChanged: () => refresh((prev) => !prev),
    ...options,
  })

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {children.flat().map((child) => (
          <div key={child.key} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      {loaded &&
        instanceRef.current &&
        instanceRef.current.track.details.maxIdx > 0 && (
          <StyledDots>
            {[
              ...Array(
                Math.min(
                  instanceRef.current.slides.length,
                  instanceRef.current.track.details.maxIdx + 1,
                ),
              ).keys(),
            ].map((idx) => (
              <div
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                data-active={currentSlide === idx}
              />
            ))}
          </StyledDots>
        )}
    </div>
  )
}
