import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-card relative overflow-hidden rounded-2xl">
      {children}
    </div>
  );
};

export default Card;
