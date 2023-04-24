
import { motion } from "framer-motion";

// The initial and animate properties define the animation states
const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const slideInBottom = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

// The Motion component is a wrapper that applies the animation to its children
export const FadeIn = ({ children }: any) => {
  return (

    <motion.div initial="initial" animate="animate" exit="initial" variants={fadeIn}>
      {children}
    </motion.div>

  );
};

export const SlideInBottom = ({ children }: any) => {
  return (

    <motion.div initial="initial" animate="animate"  variants={slideInBottom}>
      {children}
    </motion.div>

  );
};