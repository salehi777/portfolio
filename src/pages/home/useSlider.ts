import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

const WheelControls = (slider: any) => {
  let touchTimeout: number
  let position: { x: number; y: number }
  let wheelActive: boolean

  function dispatch(e: any, name: string) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      }),
    )
  }

  function wheelStart(e: any) {
    position = {
      x: e.pageX,
      y: e.pageY,
    }
    dispatch(e, 'ksDragStart')
  }

  function wheel(e: any) {
    dispatch(e, 'ksDrag')
  }

  function wheelEnd(e: any) {
    dispatch(e, 'ksDragEnd')
  }

  function eventWheel(e: any) {
    e.preventDefault()
    if (!wheelActive) {
      wheelStart(e)
      wheelActive = true
    }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => {
      wheelActive = false
      wheelEnd(e)
    }, 50)
  }

  slider.on('created', () => {
    slider.container.addEventListener('wheel', eventWheel, {
      passive: false,
    })
  })
}

export default function useSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      vertical: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [WheelControls],
  )

  return {
    sliderRef,
    instanceRef,
    currentSlide,
    loaded,
  }
}
