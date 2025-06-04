import { useTheme, type BoxProps } from '@mui/material'
import { StyledCuboid } from './styles'
import { motion, type MotionProps } from 'motion/react'
import { useMemo } from 'react'

export interface CuboidProps
  extends Omit<MotionProps, keyof BoxProps>,
    BoxProps {
  width: number
  height: number
  length: number
  color: string
}

export default function Cuboid({ variants, ...props }: CuboidProps) {
  const theme = useTheme()

  const motionProps = useMemo(
    () =>
      variants
        ? {
            variants,
            component: motion.div,
            transformTemplate: ({ x }, generated) => {
              let newGenerated = generated
              if (x && theme.direction === 'rtl') {
                newGenerated = replaceTranslateXValue(
                  generated,
                  -x.slice(0, -2)
                )
              }
              return `rotateX(-26deg) rotateY(${
                theme.direction === 'ltr' ? -45 : 45
              }deg) ${newGenerated}`
            },
            transition: { duration: 1 },
          }
        : {},
    [theme.direction, variants]
  )

  return (
    <StyledCuboid {...motionProps} {...props}>
      <div data-front />
      <div data-left />
      <div data-right />
      <div data-top />
    </StyledCuboid>
  )
}

function replaceTranslateXValue(transformString, customNumber) {
  const regex = /(translateX\()(\-?\d+\.?\d*)(px\))/g
  return transformString.replace(regex, `$1${customNumber}$3`)
}
