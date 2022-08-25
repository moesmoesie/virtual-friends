import { Container } from "../../components";
import { useState } from "react";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import ModelCard from "./ModelCard";
import CodeCard from "./CodeCard";
import { useSpring, animated } from "react-spring";
import tailwindConfig from "../../../tailwind.config.js";

const AboutBlok: React.FC<{ blok: Blok }> = (props) => {
  return <HomeAboutModuleLarge {...props} />;
};

const HomeAboutModuleLarge: React.FC<{ blok: Blok }> = ({ blok }) => {
  const [current, setCurrent] = useState<"model" | "code">("model");

  // START ANIMATIONS
  const modelStyles = useSpring({ opacity: current == "model" ? 1 : 0 });
  const codeStyles = useSpring({ opacity: current == "code" ? 1 : 0 });
  const devButtonStyle = useSpring({
    color:
      current == "code"
        ? "#ffffff"
        : tailwindConfig.theme.colors["dark-purple-100"],
    scale: current == "code" ? 1 : 0.85,
  });
  const desButtonStyle = useSpring({
    color:
      current == "model"
        ? "#ffffff"
        : tailwindConfig.theme.colors["dark-purple-100"],
    scale: current == "model" ? 1 : 0.85,
  });

  // END ANIMATIONS

  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <div className="flex gap-3 mb-3 small:gap-10 items-baseline">
          <animated.button
            style={desButtonStyle}
            disabled={current === "model"}
            onClick={() => setCurrent("model")}
            className="display-3 origin-bottom-left whitespace-nowrap"
          >
            {blok?.designTitle}
          </animated.button>
          <animated.button
            style={devButtonStyle}
            disabled={current === "code"}
            onClick={() => setCurrent("code")}
            className="display-3 origin-bottom-right whitespace-nowrap"
          >
            {blok?.developTitle}
          </animated.button>
        </div>

        <div className="mb-8">
          <p className="body-3">{blok?.developContent}</p>
        </div>

        <div className="relative h-[400px] w-full">
          <animated.div
            style={modelStyles}
            className="absolute top-0 w-full h-full"
          >
            <ModelCard />
          </animated.div>
          <animated.div
            style={codeStyles}
            className="absolute top-0 w-full h-full"
          >
            <CodeCard />
          </animated.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBlok;
