import { Container } from "ui";
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
      <div className="mt-16 mb-20">
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
        <RichText
          content={view == "develop" ? develop_content : design_content}
        />
      </div>
    </Container>
  );
};

export default HomeAboutModule;
