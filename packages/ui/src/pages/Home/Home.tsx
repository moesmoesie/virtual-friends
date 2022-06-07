import React, { FC } from "react";
import { Module, ModuleProps } from "../../modules";

export interface HomeProps {
  modules?: ModuleProps[];
}

const Home: FC<HomeProps> = ({ modules = [] }) => {
  return (
    <div>
      {modules.map((module) => {
        return <Module module={module} />;
      })}
    </div>
  );
};

export default Home;
