import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storyblokEditable } from "@storyblok/react";
import { Button, Container, StoryblokImage } from "../../components";
import FloatingContainer from "../../components/FloatingContainer";
import { Blok } from "../types";

const HomeLandingBlok: React.FC<{ blok: Blok }> = ({ blok }) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <Container module={blok}>
        <Background images={blok?.landingImages ?? []} />
        <div className="flex items-center relative justify-between">
          <div className="max-w-2xl flex flex-col gap-10">
            <h1 className="display-1 ">{blok?.title}</h1>
            <p className="body-3 medium:max-w-[80%]">{blok.body}</p>
            <div className="flex items-center">
              <Button>{blok.callToAction}</Button>
              <div className="flex items-start gap-4">
                <div className="flex gap-4 ml-8">
                  <a className="w-7 h-7 bg-black place-items-center rounded-full grid">
                    <FontAwesomeIcon
                      className="text-white text-[19px] rounded-full"
                      icon={["fab", "instagram"]}
                    />
                  </a>

                  <a className="w-7 h-7 bg-black place-items-center rounded-full grid">
                    <FontAwesomeIcon
                      className="text-white text-[19px] rounded-full"
                      icon={["fab", "linkedin-in"]}
                    />
                  </a>

                  <a className="w-7 h-7 bg-black place-items-center rounded-full grid">
                    <FontAwesomeIcon
                      className="text-white text-[19px] rounded-full"
                      icon={["fab", "instagram"]}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Background: React.FC<{ images: any }> = (props) => {
  return (
    <>
      <div className="absolute hidden medium:block rounded-3xl -left-16 bottom-0 origin-left opacity-50 -rotate-[30deg] large:-rotate-[20deg] w-[130%] large:w-[110%] blur-3xl h-[250px] large:h-[300px] bg-gradient-1" />
      <div className="absolute medium:hidden -left-16 bottom-0 origin-left opacity-50 -rotate-[45deg] large:-rotate-[20deg] w-[200%] large:w-[110%] blur-3xl h-[250px] large:h-[300px] bg-gradient-1" />
      <div className="w-[500px]  h-[500px] -translate-y-12 right-0 absolute">
        {props.images.map((image: any, index: number) => {
          const { left, top, bottom, right, translate } = image;
          return (
            <FloatingContainer delay={index * 200} key={index}>
              <StoryblokImage
                style={{
                  left,
                  top,
                  bottom,
                  right,
                  translate,
                }}
                className="absolute w-[200px] blur-xl  large:blur-0 medium:w-[300px]"
                {...image.Image}
              />
            </FloatingContainer>
          );
        })}
      </div>
    </>
  );
};

export default HomeLandingBlok;
