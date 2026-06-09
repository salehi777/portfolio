import { StyledContent, StyledRow } from './styles'
import SvgBox from '@/components/ui/svg-box'
import { skills } from './data'
import { motion } from 'motion/react'

interface HomeSkillsProps {
  isInView: boolean
}

export default function HomeSkills({ isInView }: HomeSkillsProps) {
  return (
    <>
      <StyledContent>
        {skills.map(({ star, items }, idx) => (
          <StyledRow key={star} style={{ top: (idx + 1) * 140 }}>
            <div data-star>
              {[...new Array(star)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isInView ? { rotate: [0, i * (360 / star)] } : {}}
                  transition={{ duration: 1 }}
                >
                  <SvgBox
                    src="/icons/star.svg"
                    sx={{ transform: `rotate(-${i * (360 / star)}deg)` }}
                  />
                </motion.div>
              ))}
            </div>

            <div data-items>
              {items.map((title, i) => (
                <motion.div
                  key={i}
                  initial={{ x: '-100%', rotate: 0 }}
                  transformTemplate={({ x, rotate }) =>
                    `rotate(${rotate}) translateX(${x})`
                  }
                  animate={
                    isInView
                      ? {
                          rotate: [
                            0,
                            -i * 24 - (180 - 24 * (items.length - 1)) / 2,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1 }}
                >
                  <span>{title}</span>
                </motion.div>
              ))}
            </div>
          </StyledRow>
        ))}
      </StyledContent>
    </>
  )
}
