"use client";

import { type PageProps } from "./query";
import { Hero1ClientSection } from "@/sections/hero-1/client";

const PreviewPageCompoment: React.FC<PageProps> = (props) => {
  return (
    <main>
      {props.content.map((item, index) => {
        if (item._type === "hero-1") return <Hero1ClientSection key={index} {...item} />;
      })}
    </main>
  );
};

export default PreviewPageCompoment;
