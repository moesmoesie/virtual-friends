import React from "react";
import { GradientText, RichText } from "../../components";
import { OffersBlockProps } from "./types";
import { Container } from "../../components";

const OffersBlock: React.FC<OffersBlockProps> = (props) => {
  return (
    <Container>
      <h2 className="display-1 mb-9">
        <GradientText>{props.title}</GradientText>
      </h2>
      <div className="flex flex-col gap-14 medium:gap-28">
        {props.offers.map((el, index) => {
          return (
            <div className="flex" key={index}>
              <div className="max-w-xl grid gap-4 medium:gap-6">
                <h3 className="display-3">{el.title}</h3>
                <p className="body-3">{el.body}</p>
                <ul className="flex  gap-3">
                  {el.keywords.map((keyword, index) => {
                    return (
                      <li key={index}>
                        <Chip value={keyword} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

interface ChipProps {
  value: string;
}

const Chip: React.FC<ChipProps> = ({ value }) => {
  return (
    <div className="rounded-lg bg-dark-purple-300 px-2 py-1">
      <span className="body-1 font-bold uppercase">{value}</span>
    </div>
  );
};

export default OffersBlock;
