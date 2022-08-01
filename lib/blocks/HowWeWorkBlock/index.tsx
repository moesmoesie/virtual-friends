import React from "react";
import { Container, GradientText, Card } from "../../components";
import { HowWeWorkBlockProps } from "./types";
import { useScreen } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowWeWorkBlock: React.FC<HowWeWorkBlockProps> = (props) => {
  const screen = useScreen();

  return (
    <Container>
      <div>
        <h2 className="display-1 mb-6">
          <GradientText>{props.title}</GradientText>
        </h2>
        <p className="body-3 medium:display-4 mb-8 large:mb-12 max-w-3xl">
          {props.body}
        </p>

        <div className="relative items-stretch flex-col large:flex-row flex gap-7 large:gap-5">
          {props.steps.map((el, index) => {
            if (screen === "large") {
              return (
                <Card className="flex-1" key={index}>
                  <div className="px-4 py-6 text-center gap-6 flex flex-col items-center">
                    <div className="text-teal-500">{el.icon}</div>
                    <p className="body-3 font-bold">{el.title}</p>
                    <p className="body-1">{el.body}</p>
                  </div>
                </Card>
              );
            }

            return (
              <div key={index} className="max-w-md grid gap-1">
                <div className="flex gap-3">
                  <div className="translate-y-1">{el.icon}</div>
                  <p className="body-3 font-bold">{el.title}</p>
                </div>
                <p className="body-1">{el.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default HowWeWorkBlock;
