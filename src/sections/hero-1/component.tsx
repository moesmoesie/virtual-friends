import React from "react";

export interface Hero1Props {
  title: string;
  subtitle: string;
}

const Hero1Section: React.FC<Hero1Props> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Hero1Section;
