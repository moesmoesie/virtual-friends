import React from "react";

interface CardProps {
  children: JSX.Element;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-card relative overflow-hidden rounded-2xl">
      {children}
    </div>
  );
};

export default Card;
