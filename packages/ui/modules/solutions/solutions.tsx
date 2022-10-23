import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  GradientText,
  Chip,
  RichText,
  Image,
  ImageType,
} from "../../components";
import React from "react";
import { Waypoint } from "react-waypoint";

export interface SolutionsType extends ModuleContainerType {
  title: string;
  solutions: ContentType[];
}

export const Solutions: React.FC<SolutionsType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <h2 className="headline-4 mb-10 medium:headline-3">
          <GradientText>{props.title}</GradientText>
        </h2>
        <div className="flex flex-col gap-16">
          {props.solutions.map((solution, index) => {
            return <Ecommerce isReversed={index % 2 == 1} content={solution} />;
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};

interface EcommerceType {
  content: ContentType;
  isReversed: Boolean;
}

const Ecommerce: React.FC<EcommerceType> = ({
  content,
  isReversed = false,
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className={`flex justify-between relative items-center ${
        isReversed ? "large:flex-row-reverse" : ""
      }`}
    >
      <div className="w-12 h-12 absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-full">
        <Waypoint onEnter={() => setShow(true)}></Waypoint>
      </div>

      <div
        className={`w-[600px] hidden large:block h-[600px]  relative ${
          isReversed ? "" : "translate-y-4"
        }`}
      >
        <Image
          {...content.icon}
          className={`absolute w-full transition-all object-contain duration-700 h-full ${
            show ? "blur-3xl opacity-75 scale-105" : ""
          }`}
          width="1000"
        />
      </div>
      <div>
        <Content {...content} />
      </div>
    </div>
  );
};

interface ContentType {
  title: string;
  body: string | JSX.Element;
  keywords: string[];
  icon?: ImageType;
}

const Content: React.FC<ContentType> = (props) => {
  return (
    <div className="flex max-w-lg flex-col gap-3">
      <h3 className="headline-6 medium:headline-5">{props.title}</h3>
      <p className="body-2">
        <RichText value={props.body} />
      </p>
      <div className="flex flex-wrap gap-2">
        {props.keywords.map((keyword, index) => {
          return <Chip key={index} text={keyword} variant="active" />;
        })}
      </div>
    </div>
  );
};
