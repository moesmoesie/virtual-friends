import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={
        className +
        " relative border-purple-navy-100 border rounded-2xl bg-white"
      }
    >
      {children}
    </div>
  );
};

export default Card;
