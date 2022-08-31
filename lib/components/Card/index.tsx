import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={className + " relative  shadow-card-m  rounded-2xl bg-white"}
    >
      {children}
    </div>
  );
};

export default Card;
