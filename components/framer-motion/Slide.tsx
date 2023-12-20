"use client";
import {motion, Variants} from "framer-motion";

interface Props {
  children: JSX.Element;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  scale?: number;
}

const Slide = (props: Props) => {
  const {
    children,
    top = false,
    bottom = false,
    left = false,
    right = false,
    scale = false,
  } = props;

  let translateY = 0;
  let translateX = 0;

  if (top) translateY = 50;
  if (bottom) translateY = -50;

  if (left) translateX = -50;
  if (right) translateX = 50;

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: scale || 0.95,
      translateY,
      translateX,
    },
    show: {
      opacity: 1,
      scale: 1,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div variants={sectionVariants} initial="hidden" whileInView="show">
      {children}
    </motion.div>
  );
};

export default Slide;
