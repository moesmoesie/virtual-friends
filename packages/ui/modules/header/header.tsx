import {
  Container,
  ModuleContainerType,
  ModuleContainer,
  ImageType,
  Image,
} from "../../components";
import React from "react";

export interface HeaderType extends ModuleContainerType {
  logo: ImageType;
  links: string[];
}

export const Header: React.FC<HeaderType> = (props) => {
  return (
    <div className="fixed top-0 w-full z-[999]">
      <ModuleContainer module={props?.module}>
        <div className="border-b py-5 border-grey-200">
          <Container>
            <div className="flex justify-between items-center">
              <a href="#">
                <Image className="w-[192px]" {...props.logo} width="1000" />
              </a>
              <div className="hidden medium:flex gap-8 items-center">
                {props?.links?.map((el) => {
                  return (
                    <a href="#" className="body-3 font-bold">
                      {el}
                    </a>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </ModuleContainer>
    </div>
  );
};
