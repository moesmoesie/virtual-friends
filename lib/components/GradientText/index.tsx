import { GradientTextProps } from "./types";

const GradientText: React.FC<GradientTextProps> = (props) => {
  return (
    <span className="text-transparent bg-gradient-1 bg-clip-text">
      {props.children}
    </span>
  );
};

export default GradientText;
