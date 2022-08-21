import { FloatingContainerProps } from "./types";
import { motion } from "framer-motion";
const FloatingContainer: React.FC<FloatingContainerProps> = (props) => {
  return (
    <motion.div
      animate={{
        y: [20, -20, 20],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay: props.delay,
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};
export default FloatingContainer;
