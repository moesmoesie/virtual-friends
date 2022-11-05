import { Container, ModuleContainer, Image, ImageZod } from "../../components";
import React from "react";
import { z } from "zod";
import { ModuleZod } from "../../types";

export const Header: React.FC<HeaderType> = (props) => {
  return (
    <div className="fixed top-0 w-full z-[999]">
      <ModuleContainer module={{ background: "white", ...props?.module }}>
        <div className="border-b py-3 medium:py-5 border-grey-200">
          <Container>
            <div className="flex justify-between items-center">
              <a href="/">
                <Image className="w-[75px] medium:w-[100px]" {...props.logo} width="1000" alt="Logo" />
              </a>
              <div className="hidden medium:flex gap-8 items-center">
                {props?.links?.map((el, index) => {
                  return (
                    <a key={index} href={el.href} className="body-3 font-bold">
                      {el.text}
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

export const HeaderZod = ModuleZod.extend({
  _type: z.literal("header"),
  logo: ImageZod,
  links: z
    .array(
      z.object({
        href: z.string(),
        text: z.string(),
      })
    )
    .optional(),
});

export type HeaderType = z.infer<typeof HeaderZod>;
