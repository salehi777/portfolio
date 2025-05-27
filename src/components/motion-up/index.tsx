import { motion, Transition } from 'motion/react';

interface MotionUpProps {
  children: React.ReactNode;
  isActive: boolean;
  t?: Transition;
}

export default function MotionUp({ children, isActive, t }: MotionUpProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={isActive ? { y: [100, 0] } : {}}
      transition={{ duration: 1, ...t }}
    >
      {children}
    </motion.div>
  );
}
