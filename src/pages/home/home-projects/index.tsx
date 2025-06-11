import SmallTitle from '@/components/small-title'
import { StyledContent, StyledProject } from './styles'
import { Typography } from '@mui/material'
import { projects } from './data'
import MotionUp from '@/components/motion-up'
import Slider from '@/components/slider'
import { useTranslation } from 'react-i18next'

export default function HomeProjects({ isInView }) {
  const { t } = useTranslation()

  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle title={t('home.projects.title')} mb={{ xs: 2, md: 4 }} />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        <Slider
          perViews={[
            { breakpoint: 'xs', perView: 1 },
            { breakpoint: 'lg', perView: 3 },
          ]}
        >
          {Object.entries(projects).map(([project, info]) => (
            <StyledProject key={project}>
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <span style={{ backgroundImage: `url(${info.image})` }} />
                <div>
                  <div>{t('home.projects.projects.' + project + '.note')}</div>
                </div>
              </a>
            </StyledProject>
          ))}
        </Slider>
      </MotionUp>
    </StyledContent>
  )
}
