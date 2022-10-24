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
  Employee,
  Review,
  ImagePicker,
  Popover,
  Editor,
} from "../../components";
import React from "react";
import { Waypoint } from "react-waypoint";
import { colorOptions, employees, products, review } from "./solutions.data";

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
            const isReversed = index % 2 == 1;
            if (solution.solutionType === "website")
              return <Website isReversed={isReversed} content={solution} />;

            if (solution.solutionType === "cms")
              return <Cms isReversed={isReversed} content={solution} />;

            return <Ecommerce isReversed={isReversed} content={solution} />;
          })}
        </div>
      </Container>
    </ModuleContainer>
  );
};

interface SolutionType {
  content: ContentType;
  isReversed: Boolean;
}

const Ecommerce: React.FC<SolutionType> = ({ content, isReversed = false }) => {
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

const Website: React.FC<SolutionType> = ({ content, isReversed = false }) => {
  const [show, setShow] = React.useState(false);

  return (
    <Solution
      content={content}
      isReversed={isReversed}
      setShow={() => setShow(true)}
      show={show}
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-5">
          <Employee {...employees[0]} />
          <div className="translate-y-5 flex-1">
            <Employee {...employees[1]} />
          </div>
        </div>
        <div className="-translate-y-6">
          <Review {...review} />
        </div>
      </div>
    </Solution>
  );
};

const Cms: React.FC<SolutionType> = ({ content, isReversed = false }) => {
  const [show, setShow] = React.useState(false);
  const [color, setColor] = React.useState("small");

  return (
    <Solution
      content={content}
      isReversed={isReversed}
      setShow={() => setShow(true)}
      show={show}
    >
      <div className=" items-center flex  flex-col pt-24">
        <Editor
          initialValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam."
        />
        <div className="flex">
          <div className=" -translate-y-10">
            <ImagePicker />
          </div>

          <div className="translate-x-10 -translate-y-16">
            <Popover
              setOption={(name) => setColor(name)}
              currentOptionIndex={colorOptions.findIndex(
                (el) => el.value === color
              )}
              options={colorOptions}
            />
          </div>
        </div>
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
  solutionType: string;
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
