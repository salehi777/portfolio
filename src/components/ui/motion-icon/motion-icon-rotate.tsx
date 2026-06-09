import { motion, AnimatePresence } from 'motion/react'
import SvgBox from '../svg-box'

const MotionSvgbox = motion.create(SvgBox)
interface MotionIconRotateProps {
  index: number
  srcs: string[]
}
export default function MotionIconRotate({
  index,
  srcs,
}: MotionIconRotateProps) {
  return (
    <>
      <AnimatePresence mode="popLayout" initial={false}>
        <MotionSvgbox
          key={index}
          animate={{ rotate: [-180, 0], opacity: [0, 1] }}
          exit={{ rotate: [0, 180], opacity: [1, 0] }}
          src={srcs[index]}
          sx={{ width: 20, height: 20 }}
        />
      </AnimatePresence>

      {srcs.map((src) => (
        <SvgBox key={src} src={src} sx={{ width: 0, height: 0 }} />
      ))}
    </>
  )
}
