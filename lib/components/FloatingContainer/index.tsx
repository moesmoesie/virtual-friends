import { FloatingContainerProps } from "./types";

const FloatingContainer: React.FC<FloatingContainerProps> = (props) => {
  return (
    <div
      style={{
        animationDelay: props.delay ? `${props.delay}s` : "0s",
      }}
      className={`animate-floating ${props.className}`}
    >
      {props.children}
    </div>
  );
};
export default FloatingContainer;
