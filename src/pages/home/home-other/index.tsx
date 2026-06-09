import SmallTitle from '@/components/ui/small-title'
import { StyledContent, StyledShapes } from './styles'
import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import Cuboid from '@/components/ui/shapes/cuboid'
import { cuboids, spheres } from './data'
import Sphere from '@/components/ui/shapes/sphere'
import MotionUp from '@/components/ui/motion-up'
import Slider from '@/components/ui/slider'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'

interface HomeOtherProps {
  isInView: boolean
}

export default function HomeOther({ isInView }: HomeOtherProps) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const { t } = useTranslation()

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
          {spheres.map(({ id, variants, ...sphere }) => (
            <Sphere
              key={id}
              data-id={id}
              {...(variants
                ? { variants, animate: isInView ? 'enter' : 'exit' }
                : {})}
              {...sphere}
            />
          ))}
        </div>
      </StyledShapes>

      <StyledContent>
        <MotionUp isActive={isInView}>
          <SmallTitle
            title={t('home.other.title')}
            sx={{ mb: { xs: 2, lg: 4 } }}
          />
        </MotionUp>

        {!isMobile ? (
          <>
            <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
              {Content1(t)}
            </MotionUp>
            <MotionUp isActive={isInView} t={{ delay: 0.2 }}>
              <Content2 />
            </MotionUp>
          </>
        ) : (
          <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
            <Slider>
              {Content1(t)}
              <Content2 />
            </Slider>
          </MotionUp>
        )}
      </StyledContent>
    </>
  )
}

const Content1 = (t: TFunction) =>
  [
    t('home.other.list.0'),
    t('home.other.list.1'),
    t('home.other.list.2'),
    t('home.other.list.3'),
  ].map((title) => (
    <div key={title} data-list-item>
      <SvgBox src="/icons/info.svg" />
      <Typography variant="h5">{title}</Typography>
    </div>
  ))

const Content2 = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Divider sx={{ mt: 1, mb: 4, display: { xs: 'none', sm: 'block' } }} />
      <div data-link-item>
        <Typography variant="h6">{t('home.other.code')}:</Typography>
        <a
          href="https://github.com/salehi777/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github.svg"
            loading="lazy"
            width={40}
            height={40}
            alt="github logo"
          />
        </a>
      </div>
      <div data-link-item>
        <Typography variant="h6">{t('home.other.design')}:</Typography>
        <a
          href="https://dribbble.com/shots/14013010-Folio-Designer-Portfolio-Kit-Animation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/dribbble.svg"
            loading="lazy"
            width={40}
            height={40}
            alt="dribbble logo"
          />
        </a>
        <a
          href="https://dribbble.com/shots/422424-Skills-Dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/dribbble.svg"
            loading="lazy"
            width={40}
            height={40}
            alt="dribbble logo"
          />
        </a>
      </div>
    </Box>
  )
}
