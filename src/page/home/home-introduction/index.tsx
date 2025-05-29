import SmallTitle from '@/components/small-title';
import { StyledContent, StyledShapes } from './styles';
import { Typography } from '@mui/material';
import SvgColor from '@/components/svg-color';
import Cuboid from '@/components/shapes/cuboid';
import { cuboids } from './data';
import MotionUp from '@/components/motion-up';
import { motion } from 'motion/react';
import Slider from '@/components/slider';
import { useMediaQuery } from '@mui/material';

export default function HomeIntroduction({ loaded, isInView }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const content = (
    <>
      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        <div data-lined>
          {[
            'محمد صالحی',
            'توسعه‌دهنده React',
            'متولد ۱۳۷۵',
            'ساکن نجف‌آباد',
            'لیسانس کامپیوتر',
          ].map((text) => (
            <div key={text}>{text}</div>
          ))}
        </div>
      </MotionUp>

      <MotionUp
        isActive={isInView}
        t={{ delay: 0.2 }}
        height={{ xs: '100%', sm: 'unset' }}
      >
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
          حدود ۹ ساله یادگیری برنامه‌نویسی رو شروع کردم و از ۶ سال پیش به صورت
          متمرکز روی JavaScript و React کار میکردم.&nbsp;به صورت حضوری و بیشتر
          به صورت دورکاری سابقه کار دارم.
        </Typography>
      </MotionUp>

      <MotionUp
        isActive={isInView}
        t={{ delay: 0.3 }}
        height={{ xs: '100%', sm: 'unset' }}
      >
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
      </MotionUp>
    </>
  );

  return (
    <>
      <StyledShapes>
        <div data-shapes>
          {cuboids.map(({ id, animateInfo, ...cuboid }) => (
            <Cuboid
              key={id}
              data-id={id}
              {...cuboid}
              {...(animateInfo
                ? {
                    component: motion.div,
                    transformTemplate: (_, generated) =>
                      `rotateX(-26deg) rotateY(45deg) ${generated}`,
                    transition: { duration: 1 },
                    animate: isInView ? animateInfo : {},
                  }
                : {})}
            />
          ))}
        </div>
      </StyledShapes>

      <StyledContent>
        <MotionUp isActive={isInView}>
          <SmallTitle title="معرفی" mb={'20px'} />
        </MotionUp>

        {loaded &&
          (!isMobile ? content : <Slider>{content.props.children}</Slider>)}
      </StyledContent>
    </>
  );
}
