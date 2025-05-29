import SmallTitle from '@/components/small-title';
import { StyledContent, StyledProject } from './styles';
import { Typography } from '@mui/material';
import { projects } from './data';
import MotionUp from '@/components/motion-up';
import Image from 'next/image';
import Slider from '@/components/slider';

export default function HomeProjects({ loaded, isInView }) {
  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle title="نمونه کار" mb={{ xs: 2, md: 4 }} />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        {loaded && (
          <Slider
            perViews={[
              { breakpoint: 'xs', perView: 1 },
              { breakpoint: 'lg', perView: 3 },
            ]}
          >
            {projects.map(({ title, link, image, note }) => (
              <StyledProject key={title}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span style={{ backgroundImage: `url(${image})` }} />
                  <div>
                    {note && (
                      <div>
                        <Typography>{note}</Typography>
                      </div>
                    )}
                  </div>
                </a>
              </StyledProject>
            ))}
          </Slider>
        )}
      </MotionUp>
    </StyledContent>
  );
}
