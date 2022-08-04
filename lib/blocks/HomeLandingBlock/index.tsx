import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../components";
import { HomeLandingBlockProps } from "./types";
import { motion } from "framer-motion";

const HomeLandingBlock: React.FC<HomeLandingBlockProps> = (props) => {
  return (
    <Container>
      <div className="pt-44 medium:pt-96 medium:pb-[300px] relative">
        <div className="relative gap-5 medium:gap-7 flex flex-col items-center text-center">
          <Background />
          <h1 className="display-2 medium:display-1 drop-shadow-lg font-bold">
            {props.title}
          </h1>
          <p className="body-3 medium:text-[28px]  drop-shadow-lg max-w-[95%]">
            {props.subtitle}
          </p>
          <ScrollInicator />
        </div>
      </div>
    </Container>
  );
};

const Background = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2  w-[400px] -translate-y-[65%] h-[400px] medium:w-[800px] medium:h-[800px] medium:-translate-y-[52%]">
      <div className="w-full overflow-hidden absolute opacity-60 h-full text-purple-navy-050 blur-2xl">
        <motion.div
          animate={{
            skewX: [0, 20, 30, 40, 10, 0],
            scale: [1, 1.2, 1.05, 0.9, 0.9, 1],
            rotate: [0, 2, -3, 1, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 30,
            times: [0, 0.2, 0.4, 0.6, 0.8, 0.9],
          }}
        >
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8A3FFC"
              d="M843,681.5Q710,863,499.5,864Q289,865,163.5,682.5Q38,500,145,285.5Q252,71,477.5,109.5Q703,148,839.5,324Q976,500,843,681.5Z"
            />
          </svg>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden absolute opacity-60 h-full text-purple-navy-050 blur-2xl">
        <motion.div
          animate={{
            skewX: [0, 5, 10, -4, 7, 0],
            scale: [1, 0.9, 1.2, 0.9, 0.8, 1],
            rotate: [0, 0.2, -3, 0, -3, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 30,
            times: [0, 0.2, 0.4, 0.6, 0.8, 0.9],
          }}
        >
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgb(64,201,162)"
              d="M843,681.5Q710,863,499.5,864Q289,865,163.5,682.5Q38,500,145,285.5Q252,71,477.5,109.5Q703,148,839.5,324Q976,500,843,681.5Z"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const ScrollInicator = () => {
  return (
    <div className="w-12 h-12 rounded-full animate-bounce mt-3    medium:mt-12 grid place-items-center">
      <FontAwesomeIcon className="text-white text-[25px]" icon={"arrow-down"} />
    </div>
  );
};

export default HomeLandingBlock;
