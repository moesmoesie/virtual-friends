import React from "react";

export interface SpacerType {
  size?: {
    small?: string;
    medium?: string;
    large?: string;
  };
}

export const Spacer: React.FC<SpacerType> = ({
  size = {
    small: "0px",
    medium: "0px",
    large: "0px",
  },
}) => {
  return (
    <>
      <div
        style={{
          height: size.small ?? "0px",
        }}
        className="medium:hidden"
      />

      <div
        style={{
          height: size.medium ?? "0px",
        }}
        className="hidden medium:block large:hidden"
      />

      <div
        style={{
          height: size.large ?? "0px",
        }}
        className="hidden large:block"
      />
    </>
  );
};
