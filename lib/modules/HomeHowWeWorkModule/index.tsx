import React from "react";
import { WorkStep } from "../../components";
import { HomeHowWeWorkModuleProps } from "./types";
import ModuleContainer from "../../components/ModuleContainer";
import { useScreen } from "../../hooks";

const HomeHowWeWorkModule: React.FC<HomeHowWeWorkModuleProps> = ({
  body = "Default Body",
  steps = [],
  title = "default",
}) => {
  const screen = useScreen();

  return (
    <ModuleContainer title={title}>
      <div>
        <p className="body-3 medium:display-4 mb-6 max-w-3xl">{body}</p>

        {["small", "medium"].includes(screen) && (
          <div className="mt-10 flex gap-4 ">
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
        )}

        {screen === "large" && (
          <div className="mt-14 gap-4 flex">
            <div className="relative flex gap-5">
              <div className="absolute top-6 z-40 h-1 w-full">
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
        )}
      </div>
    </ModuleContainer>
  );
};

const TrackBar: React.FC<{ itemCount: number }> = ({ itemCount }) => {
  const currentPercentage = 50;
  return (
    <svg width="100%" height={"40px"}>
      <defs>
        <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#927cff" />
          <stop offset={`${currentPercentage - 30}%`} stopColor="#927cff" />
          <stop offset={`${currentPercentage - 12} %`} stopColor="#40c9a2" />
          <stop offset={`${currentPercentage}%`} stopColor="#40c9a2" />
          <stop offset={`${currentPercentage + 12}%`} stopColor="#40c9a2" />
          <stop offset={`${currentPercentage + 30}%`} stopColor="#927cff" />
          <stop offset="100%" stopColor="#927cff" />
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
