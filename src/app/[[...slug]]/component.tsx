import Hero1Section from "@/sections/hero-1/component";
import { type PageProps } from "./query";

const PageCompoment: React.FC<PageProps> = (props) => {
  return (
    <main>
      {props.content.map((item, index) => {
        if (item._type === "hero-1") return <Hero1Section key={index} {...item} />;
      })}
    </main>
  );
};

export default PageCompoment;
