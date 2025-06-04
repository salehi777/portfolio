import { useKeenSlider } from 'keen-slider/react'
import { StyledDots } from './styles'
import { useMemo, useState } from 'react'
import { useTheme } from '@mui/material'

interface SliderProps {
  perViews?: {
    breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    perView: number
  }[]
  children: React.ReactNode[]
}

export default function Slider({ perViews, children }: SliderProps) {
  const theme = useTheme()

  const breakpoints = useMemo(() => {
    const temp = {}
    perViews?.forEach(({ breakpoint, perView }) => {
      temp[theme.breakpoints.up(breakpoint).substring(7)] = {
        slides: { perView },
      }
    })
    return temp
  }, [perViews])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: theme.direction === 'rtl',
    breakpoints,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {children.flat().map((child, index) => (
          <div key={index} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      {loaded &&
        instanceRef.current &&
        instanceRef.current.track.details.maxIdx > 0 && (
          <StyledDots>
            {[
              ...Array(instanceRef.current.track.details.maxIdx + 1).keys(),
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
