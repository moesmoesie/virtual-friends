import React from "react";

interface CardProps {
  children: JSX.Element;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-card relative overflow-hidden rounded-2xl">
      {children}

      <svg
        className="absolute left-0 right-0 top-0 bottom-0"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(146, 124, 255, 0.71)" />
            <stop offset="100%" stopColor="rgba(64, 201, 162, 0.24)" />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          strokeWidth={"2px"}
          stroke="url(#linear)"
          rx={"16px"}
        />
      </svg>
    </div>
  );
};

export default Card;
