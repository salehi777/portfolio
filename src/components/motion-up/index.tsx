import type { Transition } from 'motion'
import { motion } from 'motion/react'

interface MotionUpProps {
  children: React.ReactNode
  isActive: boolean
  t?: Transition
}

export default function MotionUp({ isActive, t, ...props }: MotionUpProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={isActive ? { y: [100, 0] } : {}}
      transition={{ duration: 0.6, ...t }}
      {...props}
    />
  )
}
