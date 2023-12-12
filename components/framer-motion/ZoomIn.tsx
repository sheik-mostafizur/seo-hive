"use client";
import {motion} from "framer-motion";

interface Props {
  children: JSX.Element;
}

const ZoomIn = ({children}: Props) => {
  return (
    <motion.div
      initial={{scale: 0.75, opacity: 0}}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={
        {
          // times: [0, 0.2, 0.5, 0.8, 1],
        }
      }>
      {children}
    </motion.div>
  );
};

export default ZoomIn;
