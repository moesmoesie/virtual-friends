import { AboutBlockProps } from "./types";
import { Card, Container } from "../../components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScreen } from "../../hooks";

const variants = {
  active: { x: 0, scale: 1 },
  nonActive: { x: "105%", scale: 0.96 },
};

const desvariants = {
  active: { x: 0, scale: 1 },
  nonActive: { x: "-105%", scale: 0.96 },
};

const HomeAboutModule: React.FC<AboutBlockProps> = (props) => {
  const screen = useScreen();
  if (screen !== "large") {
    return <HomeAboutModuleSmall {...props} />;
  }

  return <HomeAboutModuleLarge {...props} />;
};

const HomeAboutModuleLarge: React.FC<AboutBlockProps> = (props) => {
  return (
    <Container>
      <div className="flex gap-52 mb-9 items-center justify-center">
        <div className="max-w-sm">
          <p className="display-3 text-end">{props.design_title}</p>
          <p className="body-3 text-end">{props.design_content}</p>
        </div>
        <div className="max-w-sm">
          <p className="display-3">{props.develop_title}</p>
          <p className="body-3">{props.develop_content}</p>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <Card className="flex-1 h-[371px]">
          <div />
        </Card>

        <Card className="flex-1 h-[371px]">
          <div />
        </Card>
      </div>
    </Container>
  );
};

const HomeAboutModuleSmall: React.FC<AboutBlockProps> = (props) => {
  const [currentView, setCurrentView] = useState("design");
  return (
    <Container>
      <div className="">
        <div className="flex mb-4 gap-8 medium:gap-16 items-baseline">
          <button
            onClick={() => setCurrentView("design")}
            className={`display-4 text-dark-purple-100 transition-all origin-bottom ${
              currentView === "design" ? "!text-white !scale-110" : ""
            }`}
          >
            {props.design_title}
          </button>

          <button
            onClick={() => setCurrentView("develop")}
            className={`display-4 text-dark-purple-100 transition-all origin-bottom ${
              currentView === "develop" ? "!text-white !scale-105" : ""
            }`}
          >
            {props.develop_title}
          </button>
        </div>
        <p className="body-3 mb-12 medium:max-w-[75%]">
          {currentView === "design"
            ? props.design_content
            : props.develop_content}
        </p>

        <motion.div
          onDrag={(event) => console.log(event)}
          className="medium:h-[371px] relative h-[580px]"
        >
          {/* DESIGN CARD */}
          <motion.div
            onClick={() => setCurrentView("design")}
            variants={desvariants}
            transition={{
              ease: "easeInOut",
            }}
            initial="active"
            animate={currentView === "design" ? "active" : "nonActive"}
            className="absolute top-0 left-0 h-full"
          >
            <Card className="w-[343px] medium:w-[548px] h-full">
              <div />
            </Card>
          </motion.div>

          {/* DEVELOP CARD */}
          <motion.div
            onClick={() => setCurrentView("develop")}
            variants={variants}
            transition={{
              ease: "easeInOut",
            }}
            initial="nonActive"
            animate={currentView === "develop" ? "active" : "nonActive"}
            className="absolute top-0 left-0 h-full"
          >
            <Card className="w-[343px] medium:w-[548px] h-full">
              <div />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default HomeAboutModule;
