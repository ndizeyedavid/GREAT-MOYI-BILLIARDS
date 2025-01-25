import { cubicBezier } from "framer-motion";

const slideIn = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: { ease: "easeOut", duration: 1 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.2, 0.65, 0.3, 0.9),
    },
  },
};

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export {
  slideIn,
  fadeIn,
  staggerContainer,
  textVariant,
  letterAnimation,
  scaleIn,
  slideFromLeft,
  slideFromRight,
};
