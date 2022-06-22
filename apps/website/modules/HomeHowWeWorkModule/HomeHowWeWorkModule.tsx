import React from "react";
import { Container, WorkStep } from "ui";
import { motion } from "framer-motion";

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
          <div className="absolute top-6 z-50 h-1 w-full">
            <TrackBar itemCount={5} />
          </div>

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

const TrackBar: React.FC<{ itemCount: number }> = ({ itemCount }) => {
  const currentPercentage = 50;
  return (
    <svg width="100%" height={"40px"}>
      <defs>
        <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stop-color="#927cff" />
          <stop offset={`${currentPercentage - 30}%`} stop-color="#927cff" />
          <stop offset={`${currentPercentage - 12} %`} stop-color="#40c9a2" />
          <stop offset={`${currentPercentage}%`} stop-color="#40c9a2" />
          <stop offset={`${currentPercentage + 12}%`} stop-color="#40c9a2" />
          <stop offset={`${currentPercentage + 30}%`} stop-color="#927cff" />
          <stop offset="100%" stop-color="#927cff" />
        </linearGradient>
      </defs>

      <clipPath id="myClip">
        <rect width="100%" y="10" className="h-2" />
        <circle cx="10%" cy="12.5" r="12.5" />
        <circle cx="30%" cy="12.5" r="12.5" />
        <circle cx="50%" cy="12.5" r="12.5" />
        <circle cx="70%" cy="12.5" r="12.5" />
        <circle cx="90%" cy="12.5" r="12.5" />
      </clipPath>

      <g clipPath="url(#myClip)">
        <rect width="100%" y="0" fill="url(#0)" className="h-10" />
      </g>
    </svg>
  );
};

export default HomeHowWeWorkModule;
