import { Box, BoxProps } from '@mui/material';
import { motion, Transition } from 'motion/react';

interface MotionUpProps extends BoxProps{
  children: React.ReactNode;
  isActive: boolean;
  t?: Transition;
}

const MotionBox = motion.create(Box);

export default function MotionUp({ children, isActive, t,...props }: MotionUpProps) {

  return (
    <MotionBox
      initial={{ y: 100 }}
      animate={isActive ? { y: [100, 0] } : {}}
      transition={{ duration: 1, ...t }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
