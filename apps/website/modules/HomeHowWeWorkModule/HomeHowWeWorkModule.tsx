import React from "react";
import { Container, WorkStep } from "ui";

type step = {
  title: string;
  body: string;
};

interface HomeHowWeWorkModuleProps {
  title: string;
  body: string;
  steps: step[];
}

const HomeHowWeWorkModule: React.FC<HomeHowWeWorkModuleProps> = ({
  body = "Default Body",
  steps = [],
  title = "default",
}) => {
  return (
    <Container className="pb-20">
      <h2 className="gradient-text display-1 mb-5 inline-block">{title}</h2>
      <p className="body-3 medium:display-4 mb-6 max-w-3xl">{body}</p>

      {/* Small Medium Screen */}
      <div className="mt-10 flex gap-4 large:hidden">
        <div className="bg-green-purple-gradient w-1 rounded-xl" />
        <div className="flex flex-col gap-6">
          {steps.map((el, index) => {
            return (
              <WorkStep
                title={el.title}
                body={el.body}
                key={index}
                varient="no-card"
              />
            );
          })}
        </div>
      </div>

      {/* Larger Screen */}
      <div className="mt-14 hidden gap-4 large:flex">
        <div className="relative flex gap-5">
          <div className=" bg-green-purple-gradient absolute top-[16%] h-1 w-full rounded-xl" />
          {steps.map((el, index) => {
            return (
              <WorkStep
                title={el.title}
                body={el.body}
                key={index}
                varient="card"
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default HomeHowWeWorkModule;
