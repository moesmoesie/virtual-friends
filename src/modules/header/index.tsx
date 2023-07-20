import React from "react";
import Image from "next/image";
import getCustomImageLoader from "../../sanity/helpers/getCustomImageLoader";
import Container from "../../components/container/container";
import ModuleContainer from "../../components/module-container/module-container";
import { HeaderType } from "./type";

export const Header: React.FC<HeaderType> = (props) => {
  return (
    <div className="fixed top-0 w-full z-[999]">
      <ModuleContainer module={{ background: "white", ...props?.module }}>
        <div className="border-b py-3 medium:py-5 border-grey-200">
          <Container>
            <div className="flex justify-between items-center">
              <a href="/">
                <Image loader={getCustomImageLoader} {...props.logo} width={150} priority />
              </a>

              {props.links && (
                <div className="hidden medium:flex gap-8 items-center">
                  {props.links.map((el, index) => {
                    return (
                      <a key={index} href={el.href} className="body-3 font-bold">
                        {el.text}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </Container>
        </div>
      </ModuleContainer>
    </div>
  );
};
