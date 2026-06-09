import { type LazyLoadImageProps } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { StyledLazyLoadImage, StyledRatioWraapper } from './styles'

const placeholder = '/images/placeholder.png'

interface ImageProps extends LazyLoadImageProps {
  ratio?:
    | '4/3'
    | '3/4'
    | '6/4'
    | '4/6'
    | '16/9'
    | '9/16'
    | '21/9'
    | '9/21'
    | '1/1'
}

export default function Image({ ratio, ...props }: ImageProps) {
  const image = (
    <StyledLazyLoadImage
      effect="blur"
      placeholderSrc={placeholder} // shown while loading
      onError={(e) => {
        if (e.currentTarget.src.endsWith(placeholder)) return // placeholder image error
        e.currentTarget.onerror = null // prevents looping
        e.currentTarget.src = placeholder // shown if image fails
      }}
      {...props}
    />
  )

  if (!ratio) return image

  const [w, h] = ratio.split('/')

  return (
    <StyledRatioWraapper style={{ paddingTop: `calc(100% / ${w} * ${h})` }}>
      {image}
    </StyledRatioWraapper>
  )
}
