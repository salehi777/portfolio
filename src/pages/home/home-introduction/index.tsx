import SmallTitle from '@/components/small-title'
import { StyledContent, StyledShapes } from './styles'
import { Typography } from '@mui/material'
import SvgColor from '@/components/svg-color'
import Cuboid from '@/components/shapes/cuboid'
import { cuboids } from './data'
import MotionUp from '@/components/motion-up'
import { motion } from 'motion/react'
import Slider from '@/components/slider'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useHasRendered from '../useHasRendered'

export default function HomeIntroduction({ loaded, isInView }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const { t } = useTranslation()
  const { hasRendered } = useHasRendered(isInView)

  if (!hasRendered) return null

  return (
    <>
      <StyledShapes>
        <div data-shapes>
          {cuboids.map(({ id, variants, ...cuboid }) => (
            <Cuboid
              key={id}
              data-id={id}
              {...(variants
                ? { variants, animate: isInView ? 'enter' : 'exit' }
                : {})}
              {...cuboid}
            />
          ))}
        </div>
      </StyledShapes>

      <StyledContent>
        <MotionUp isActive={isInView}>
          <SmallTitle title={t('home.introduction.title')} mb={'20px'} />
        </MotionUp>

        {loaded &&
          (!isMobile ? (
            <>
              <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
                <Content1 />
              </MotionUp>
              <MotionUp isActive={isInView} t={{ delay: 0.2 }}>
                <Content2 />
              </MotionUp>
              <MotionUp isActive={isInView} t={{ delay: 0.3 }}>
                <Content3 />
              </MotionUp>
            </>
          ) : (
            <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
              <Slider>
                <Content1 />
                <Content2 />
                <Content3 />
              </Slider>
            </MotionUp>
          ))}
      </StyledContent>
    </>
  )
}

const Content1 = () => {
  const { t } = useTranslation()
  return (
    <div data-list>
      {[
        t('home.introduction.full_name'),
        t('home.introduction.job'),
        t('home.introduction.birth_date'),
        t('home.introduction.location'),
        t('home.introduction.education'),
      ].map((text) => (
        <div key={text}>{text}</div>
      ))}
    </div>
  )
}

const Content2 = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        mt: { sm: 2.5, md: 4 },
        mb: { sm: 4, md: 5 },
        display: 'flex',
        alignItems: 'center',
        height: { xs: '100%', sm: 'unset' },
      }}
    >
      {t('home.introduction.description')}
    </Typography>
  )
}

const Content3 = () => (
  <div data-contacts>
    <a href="tel:09137276118">
      <SvgColor src="/icons/phone.svg" />
      <div>0913 727 6118</div>
    </a>
    <a href="mailto:msalehy77@gmail.com">
      <SvgColor src="/icons/mail.svg" />
      <div>msalehy77@gmail.com</div>
    </a>
  </div>
)
