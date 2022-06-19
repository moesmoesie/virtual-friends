import React from "react";

interface GradientTextProps {
  children: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children }) => {
  return <span className="gradient-text caret-PurpleNavy/050">{children}</span>;
};

export default GradientText;
