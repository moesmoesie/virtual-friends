import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={
        className +
        " relative border-purple-navy-100 border rounded-lg bg-gradient-glass supports-backdrop-filter:backdrop-blur-lg"
      }
    >
      {children}
    </div>
  );
};

export default Card;
