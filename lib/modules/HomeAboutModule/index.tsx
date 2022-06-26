import { HomeAboutModuleProps } from "./types";
import { RichText, Container, Card } from "../../components";
import { useState } from "react";
import { ModuleContainer } from "../../components";

const HomeAboutModule: React.FC<HomeAboutModuleProps> = ({
  design_content,
  design_title,
  develop_content,
  develop_title,
}) => {
  const [view, setView] = useState<"develop" | "design">("design");

  return (
    <ModuleContainer>
      <div className="relative hidden large:block">
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
      </div>

      {/* Small Medium */}
      <div className="large:hidden">
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
    </ModuleContainer>
  );
};

export default HomeAboutModule;
