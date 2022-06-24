import React from "react";
import { Container } from "../../components";
import { RichText } from "../../components";
import Company from "./Company";
import Ecommerce from "./Ecommerce";

interface HomeOffersModuleProps {
  title: string;
  offers: {
    title: string;
    body: string | object[];
    keywords: string[];
  }[];
}

const HomeOffersModule: React.FC<HomeOffersModuleProps> = ({
  title = "Default Title",
  offers = [],
}) => {
  return (
    <Container className="mb-16">
      <h2 className="display-1 gradient-text mb-6 inline-block medium:mb-11">
        {title}
      </h2>
      <div className="flex flex-col gap-14 large:gap-24">
        {offers.map((el, index) => {
          return (
            <Offer
              key={index}
              reverse={index % 2 == 0}
              keywords={el.keywords}
              title={el.title}
            >
              <RichText content={el.body} />
            </Offer>
          );
        })}
      </div>
    </Container>
  );
};

interface OfferProps {
  title: string;
  children: string | JSX.Element;
  keywords: string[];
  reverse: boolean;
}

const Offer: React.FC<OfferProps> = ({
  title,
  children,
  keywords,
  reverse = false,
}) => {
  return (
    <div
      className={`large:flex ${
        reverse ? "large:flex-row-reverse" : ""
      } large: items-center large:gap-12`}
    >
      <div className="flex-[1]">
        {/* Title */}
        <h3 className="display-3 mb-4"> {title}</h3>

        {/* Body */}
        <div className="mb-5 max-w-3xl">{children}</div>

        {/* Keywords  */}
        <div className="flex flex-wrap gap-3">
          {keywords.map((el, index) => {
            return <Chip value={el} key={index} />;
          })}
        </div>
      </div>
      <Company />
    </div>
  );
};

interface ChipProps {
  value: string;
}

const Chip: React.FC<ChipProps> = ({ value }) => {
  return (
    <div className="rounded-lg bg-DarkPurple/300 px-2 py-1">
      <span className="body-1 font-bold uppercase">{value}</span>
    </div>
  );
};

export default HomeOffersModule;
