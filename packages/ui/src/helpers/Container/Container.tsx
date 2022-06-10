import React from "react";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`md:px-16 max-w-6xl px-4 ${className}`}>{children}</div>
  );
};

export default Container;
