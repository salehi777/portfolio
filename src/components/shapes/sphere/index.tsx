import { useTheme, type BoxProps } from '@mui/material'
import { StyledSphere } from './styles'
import { motion, type MotionProps } from 'motion/react'
import { useMemo } from 'react'

export interface SphereProps
  extends Omit<MotionProps, keyof BoxProps>,
    BoxProps {
  radius: number
  color: string
}

export default function Sphere({ variants, ...props }: SphereProps) {
  const motionProps = useMemo(
    () =>
      variants
        ? {
            variants,
            component: motion.div,
            transition: { duration: 1 },
          }
        : {},
    [variants]
  )

  return <StyledSphere {...motionProps} {...props} />
}
