import { Container } from "../../components";
import { useEffect, useState } from "react";
import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import ModelCard from "./ModelCard";
import CodeCard from "./CodeCard";
import { useSpring, animated } from "@react-spring/web";
import { useScreen, useWindow } from "../../hooks";

const AboutBlok: React.FC<{ blok: Blok }> = (props) => {
  return <HomeAboutModuleLarge {...props} />;
};

const HomeAboutModuleLarge: React.FC<{ blok: Blok }> = ({ blok }) => {
  const [current, setCurrent] = useState<"model" | "code">("model");
  const screen = useScreen();
  const window = useWindow();

  const [postion, setPosition] = useState<number>(0);

  useEffect(() => {
    if (window.width < 1000) {
      setPosition(550);
    } else if (window.height < 1200) {
      setPosition(400);
    } else {
      setPosition(400);
    }
  }, [window]);

  // START ANIMATIONS
  const modelStyles = useSpring({
    config: {
      duration: 0,
    },
    opacity:
      current == "model" || ["medium", "large"].includes(screen ?? "") ? 1 : 0,
  });

  const codeStyles = useSpring({
    config: {
      duration: 0,
    },
    opacity:
      current == "code" || ["medium", "large"].includes(screen ?? "") ? 1 : 0,
  });

  const modelTextStyles = useSpring({
    opacity: current == "model" ? 1 : 0,
  });

  const codeTextStyles = useSpring({
    opacity: current == "code" ? 1 : 0,
  });

  const devButtonStyle = useSpring({
    color: current == "code" ? "#ffffff" : "#564f71",
    scale: current == "code" ? 1 : 0.85,
  });

  const positionStyle = useSpring({
    transform:
      current === "code" && screen === "medium"
        ? `translateX(-${postion}px)`
        : `translateX(0px)`,
  });

  const desButtonStyle = useSpring({
    color: current == "model" ? "#ffffff" : "#564f71",
    scale: current == "model" ? 1 : 0.85,
  });

  // END ANIMATIONS

  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <div>
          {screen !== "large" && (
            <>
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
                <div className="relative">
                  <animated.p
                    style={modelTextStyles}
                    className="body-3 max-w-xl"
                  >
                    {blok?.developContent}
                  </animated.p>
                  <animated.p
                    style={codeTextStyles}
                    className="body-3 absolute top-0 max-w-xl"
                  >
                    {blok?.designContent}
                  </animated.p>
                </div>
              </div>
            </>
          )}

          {screen === "large" && (
            <>
              <div className="flex text-center mb-10 gap-40">
                <div className="flex-1 flex items-center flex-col">
                  <p className="display-3">{blok?.developTitle}</p>
                  <p className="body-3">{blok?.developContent}</p>
                </div>
                <div className="flex-1">
                  <p className="display-3">{blok?.designTitle}</p>
                  <p className="body-3">{blok?.designContent}</p>
                </div>
              </div>
            </>
          )}

          <animated.div
            style={positionStyle}
            className="relative h-[400px] medium:gap-6 medium:flex w-full"
          >
            {/* MODEL CARD */}
            <animated.div
              onClickCapture={() => setCurrent("model")}
              style={modelStyles}
              onClick={() => {}}
              className="absolute medium:min-w-[600px] large:min-w-0 medium:relative top-0 w-full h-full"
            >
              <ModelCard />
            </animated.div>

            {/* CODE CARD */}
            <animated.div
              onClickCapture={() => setCurrent("code")}
              style={codeStyles}
              className={`absolute medium:relative medium:min-w-[600px] large:min-w-0 top-0 w-full h-full`}
            >
              <div
                className={`
              w-full h-full
             ${
               current === "code"
                 ? "pointer-events-auto"
                 : "pointer-events-none"
             }`}
              >
                <CodeCard />
              </div>
            </animated.div>
          </animated.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBlok;
