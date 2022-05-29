import React, { FC } from "react";
import { HomeProps } from "./Home.types";
import { Button } from "../../components";

const Home: FC<HomeProps> = ({ hero_title, ...props }) => {
  return (
    <div>
      <h1 className="text-3xl">{hero_title}</h1>
      <Button text="Click Me" />
    </div>
  );
};

export default Home;
