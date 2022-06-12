import { Container, Card } from "ui";
import { RichText } from "../../components";
import { useState } from "react";

interface HomeAboutModuleProps {
  design_content: object[] | string;
  design_title: string;
  develop_content: object[] | string;
  develop_title: string;
}

const HomeAboutModule: React.FC<HomeAboutModuleProps> = ({
  design_content,
  design_title,
  develop_content,
  develop_title,
}) => {
  const [view, setView] = useState<"develop" | "design">("design");

  return (
    <Container>
      <div className="relative mt-16 mb-20 hidden large:block">
        <div className="mb-9 flex justify-center gap-24">
          <div className="mb-4 flex flex-col items-end gap-9 text-right">
            <button className="display-3 text-right">{design_title}</button>
            <div className="max-w-md">
              <RichText content={design_content} />
            </div>
          </div>

          <div className="mb-4 flex flex-col items-start gap-9">
            <button className="display-3">{develop_title}</button>
            <div className="max-w-md">
              <RichText content={develop_content} />
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <Card>
              <div className="h-96" />
            </Card>
          </div>

          <div className="flex-1">
            <Card>
              <div className="h-96" />
            </Card>
          </div>
        </div>

        <Gradient />
      </div>

      {/* Small Medium */}
      <div className="mt-16 mb-20 large:hidden">
        <div className="mb-4 flex items-baseline justify-start gap-9">
          <button className="display-3">
            {view == "design" ? design_title : develop_title}
          </button>
          <button
            onClick={() => setView(view === "design" ? "develop" : "design")}
            className="display-4 text-DarkPurple/100"
          >
            {view == "develop" ? design_title : develop_title}
          </button>
        </div>
        <div className="max-w-2xl">
          <RichText
            content={view == "develop" ? develop_content : design_content}
          />
        </div>
      </div>
    </Container>
  );
};

const Gradient = () => {
  return (
    <div className="absolute left-1/2 top-3/4 -z-30 h-[35rem] w-[35rem] -translate-y-1/3 -translate-x-1/2 overflow-hidden rounded-full bg-PurpleNavy/500 opacity-70 blur-[80px] " />
  );
};

export default HomeAboutModule;
