import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  GradientText,
  Chip,
  RichText,
  Image,
  ImageType,
  Product,
  Receipt,
  ItemType,
} from "../../components";
import React from "react";
import { Waypoint } from "react-waypoint";
import { products } from "./solutions.data";

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
  const [basket, setBasket] = React.useState<ItemType[]>([products[0]]);

  return (
    <Solution
      content={content}
      isReversed={isReversed}
      setShow={() => setShow(true)}
      show={show}
    >
      <div className="relative flex items-center  justify-center gap-6 ">
        <Product
          products={products}
          onBuy={(product) => setBasket((prev) => [...prev, product])}
        />
        <Receipt items={basket} title="Bonnetje" />
      </div>
    </Solution>
  );
};

// START HELPERS

const Solution: React.FC<{
  content: ContentType;
  children: JSX.Element;
  isReversed: Boolean;
  show: Boolean;
  setShow: () => void;
}> = ({ content, isReversed, children, setShow, show }) => {
  return (
    <div
      className={`flex justify-between relative items-center ${
        isReversed ? "large:flex-row-reverse" : ""
      }`}
    >
      <div className="w-12 h-12 absolute -translate-x-1/2 top-[70%] left-1/2">
        <Waypoint onEnter={() => setShow()}></Waypoint>
      </div>

      <div
        className={`w-[600px] hidden large:block h-[600px]  relative translate-y-16 `}
      >
        <Image
          {...content.icon}
          className={`absolute w-full transition-all object-contain duration-700 h-full ${
            show ? "blur-3xl opacity-75 scale-105" : ""
          }`}
          width="1000"
        />

        <SlideInContainer show={show} direction={"bottom"}>
          {children}
        </SlideInContainer>
      </div>

      <div>
        <Content {...content} />
      </div>
    </div>
  );
};

const SlideInContainer: React.FC<{
  children: JSX.Element;
  show: Boolean;
  direction: "top" | "left" | "right" | "bottom";
}> = ({ children, show, direction }) => {
  return (
    <div
      className={`
        transition-all duration-700
        ${show ? "!opacity-100 !translate-x-0 !translate-y-0" : "opacity-0"}
        ${direction == "left" ? "-translate-x-28" : ""}
        ${direction == "right" ? "translate-x-28" : ""}
        ${direction == "top" ? "-translate-y-28" : ""}
        ${direction == "bottom" ? "translate-y-28" : ""}
      `}
    >
      {children}
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
