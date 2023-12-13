"use client";
import {motion, Variants} from "framer-motion";

interface Props {
  children: JSX.Element;
}

const SlideUp = ({children}: Props) => {
  const cardSectionTitleVariants: Variants = {
    hidden: {
      opacity: 0,
      translateY: 50,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardSectionTitleVariants}
      initial="hidden"
      whileInView="show">
      {children}
    </motion.div>
  );
};

export default SlideUp;
