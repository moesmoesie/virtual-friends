import React from "react";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { FooterType } from "./type";

export const Footer: React.FC<FooterType> = (props) => {
  return (
    <ModuleContainer module={{ background: "#893AD8", ...props?.module }}>
      <Container>
        <div className="flex medium:items-center gap-[10px] flex-col text-white py-5 medium:flex-row justify-between">
          <p className="body-2">
            <span className="font-bold">Virtual Friends</span>
            <span className="ml-2">© 2022</span>
          </p>

          {props.links && (
            <div className="flex gap-8 items-center">
              {props.links.map((el, index) => {
                return (
                  <a key={index} href={el.href} className="body-2">
                    {el.text}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </ModuleContainer>
  );
};
