import React from "react";
import {
  Container,
  GradientText,
  Card,
  InfoCard,
  StoryblokImage,
  ScrollContainer,
} from "../../components";
import { useScreen } from "../../hooks";
import { storyblokEditable } from "@storyblok/react";
import { Blok } from "../types";

const HowWeWorkBlock: React.FC<{ blok: Blok }> = ({ blok }) => {
  const screen = useScreen();

  return (
    <div {...storyblokEditable(blok)}>
      <Container module={blok}>
        <div>
          <h2 className="display-1 mb-6">
            <GradientText>{blok?.title}</GradientText>
          </h2>

          <p className="body-3 medium:display-4 mb-8 large:mb-12 max-w-3xl">
            {blok?.body}
          </p>

          {screen === "large" && (
            <div className="flex gap-5">
              {blok?.steps.map((el: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex-1 h-full"
                    {...storyblokEditable(el)}
                  >
                    <Card>
                      <div className="px-4 py-6 text-center gap-6 flex flex-col items-center">
                        <StoryblokImage className="w-24" {...el?.icon} />
                        <p className="body-3 font-bold">{el.title}</p>
                        <p className="body-1">{el.body}</p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}

          {screen === "medium" && (
            <ScrollContainer min={-450} max={0}>
              <div className="flex gap-5">
                {blok?.steps.map((el: any) => {
                  return (
                    <div
                      {...storyblokEditable(el)}
                      className="min-w-[200px]"
                      key={el._uid}
                    >
                      <Card className="h-full">
                        <div className="px-4 py-6 text-center gap-6 flex flex-col items-center">
                          <StoryblokImage className="w-24" {...el?.icon} />
                          <p className="body-3 font-bold">{el.title}</p>
                          <p className="body-1">{el.body}</p>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </ScrollContainer>
          )}

          {screen === "small" && (
            <div className="flex gap-5 flex-col">
              {blok?.steps.map((el: any, index: number) => {
                return (
                  <div key={index} {...storyblokEditable(el)}>
                    <InfoCard
                      title={el.title}
                      body={el.body}
                      icon={<StoryblokImage className="w-" {...el?.icon} />}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HowWeWorkBlock;
