import {
  Container,
  ModuleContainerType,
  ModuleContainer,
} from "../../components";
import React from "react";

export interface FooterType extends ModuleContainerType {
  links: string[];
}

export const Footer: React.FC<FooterType> = (props) => {
  return (
    <ModuleContainer module={props?.module}>
      <Container>
        <div className="flex medium:items-center gap-[10px] flex-col text-white py-5 medium:flex-row justify-between">
          <p className="body-2">
            <span className="font-bold">Virtual Friends</span>
            <span className="ml-2">© 2022</span>
          </p>
          <div className="flex gap-8 items-center">
            {props?.links?.map((el, index) => {
              return (
                <a key={index} href="#" className="body-2">
                  {el}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </ModuleContainer>
  );
};
