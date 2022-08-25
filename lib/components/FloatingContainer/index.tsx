import { FloatingContainerProps } from "./types";
import { useSpring, animated, easings } from "react-spring";

const FloatingContainer: React.FC<FloatingContainerProps> = (props) => {
  const p = useSpring({
    to: async (next) => {
      while (true) {
        await next({ radians: 2 * Math.PI, reset: true });
      }
    },
    delay: props?.delay,
    from: { radians: 0 },
    reset: true,
    config: { duration: 3500 },
  });

  return (
    <animated.div
      style={{
        transform: p.radians.to((value) => {
          const y = Math.sin(value) * 10;
          return `translateY(${y}px)`;
        }),
      }}
      className={props.className}
    >
      {props.children}
    </animated.div>
  );
};
export default FloatingContainer;
