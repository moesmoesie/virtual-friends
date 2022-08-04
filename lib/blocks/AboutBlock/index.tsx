import { AboutBlockProps } from "./types";
import { Container } from "../../components";
import { motion } from "framer-motion";
import { useRef } from "react";
const HomeAboutModule: React.FC<AboutBlockProps> = (props) => {
  const r = useRef(null);
  return (
    <Container>
      <AnimateIn className="flex justify-center gap-52">
        <div className="grid flex-1 gap-4 max-w-md">
          <p className="display-3 text-end">{props.design_title}</p>
          <p className="body-3  text-end">{props.design_content}</p>
        </div>

        <div className="grid flex-1 gap-4 max-w-md">
          <p className="display-3">{props.develop_title}</p>
          <p className="body-3">{props.develop_content}</p>
        </div>
      </AnimateIn>
      <div ref={r} className="w-12 h-12 bg-white"></div>
    </Container>
  );
};

interface AnimateInProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

const AnimateIn: React.FC<AnimateInProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default HomeAboutModule;
