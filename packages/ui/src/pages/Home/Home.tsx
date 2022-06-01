import React, { FC } from "react";
import { Module, ModuleProps } from "../../modules";

export interface HomeProps {
  modules: [ModuleProps];
}

const Home: FC<HomeProps> = ({ modules }) => {
  return (
    <div>
      {modules.map((el) => {
        return <Module module={el.module} />;
      })}
    </div>
  );
};

export default Home;
