import { styled } from '@mui/material/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const StyledLazyLoadImage = styled(LazyLoadImage)(({}) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'inline-flex',
}))

export const StyledRatioWraapper = styled('span')(({}) => ({
  width: '100%',
  display: 'block',
  overflow: 'hidden',
  position: 'relative',
  '>span': { top: 0, left: 0, right: 0, bottom: 0, position: 'absolute' },
}))
