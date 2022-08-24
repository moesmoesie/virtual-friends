import { Card, Container } from "../../components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScreen } from "../../hooks";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import ModelCard from "./ModelCard";
import CodeCard from "./CodeCard";

const variants = {
  active: { x: 0, scale: 1 },
  nonActive: { x: "105%", scale: 0.96 },
};

const desvariants = {
  active: { x: 0, scale: 1 },
  nonActive: { x: "-105%", scale: 0.96 },
};

const AboutBlok: React.FC<{ blok: Blok }> = (props) => {
  const screen = useScreen();
  if (screen !== "large") {
    return <HomeAboutModuleSmall {...props} />;
  }
  return <HomeAboutModuleLarge {...props} />;
};

const HomeAboutModuleLarge: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <div className="flex gap-52 mb-9 items-center justify-center">
          <div className="max-w-sm">
            <p className="display-3 text-end">{blok?.designTitle}</p>
            <p className="body-3 text-end">{blok?.designContent}</p>
          </div>
          <div className="max-w-sm">
            <p className="display-3">{blok?.developTitle}</p>
            <p className="body-3">{blok?.developContent}</p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <div className="flex-1 h-[371px]">
            <ModelCard />
          </div>

          <div className="flex-1 h-[371px]">
            <CodeCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

const HomeAboutModuleSmall: React.FC<{ blok: Blok }> = ({ blok }) => {
  const [currentView, setCurrentView] = useState("design");
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok?.module}>
        <div className="">
          <div className="flex mb-4 gap-8 medium:gap-16 items-baseline">
            <button
              onClick={() => setCurrentView("design")}
              className={`display-4 text-dark-purple-100 transition-all origin-bottom ${
                currentView === "design" ? "!text-white !scale-110" : ""
              }`}
            >
              {blok?.designTitle}
            </button>

            <button
              onClick={() => setCurrentView("develop")}
              className={`display-4 text-dark-purple-100 transition-all origin-bottom ${
                currentView === "develop" ? "!text-white !scale-105" : ""
              }`}
            >
              {blok?.developTitle}
            </button>
          </div>
          <p className="body-3 mb-12 medium:max-w-[75%]">
            {currentView === "design"
              ? blok?.designContent
              : blok?.developContent}
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
    </section>
  );
};

export default AboutBlok;
