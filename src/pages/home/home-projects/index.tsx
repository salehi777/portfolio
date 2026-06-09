import SmallTitle from '@/components/ui/small-title'
import { StyledContent, StyledProject } from './styles'
import { projects } from './data'
import MotionUp from '@/components/ui/motion-up'
import Carousel from '@/components/ui/carousel'
import { useTranslation } from 'react-i18next'

interface HomeProjectsProps {
  isInView: boolean
}

export default function HomeProjects({ isInView }: HomeProjectsProps) {
  const { t } = useTranslation()

  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle
          title={t('home.projects.title')}
          sx={{ mb: { xs: 2, md: 4 } }}
        />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        <Carousel
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
        </Carousel>
      </MotionUp>
    </StyledContent>
  )
}
