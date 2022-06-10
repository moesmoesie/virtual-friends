import { Container } from "ui";
import { RichText } from "../../components";

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
  return (
    <Container>
      <div className="mt-16 mb-20">
        <div className="mb-4 flex items-baseline justify-start gap-9">
          <button className="display-3">{design_title}</button>
          <button className="display-4 text-DarkPurple/100">
            {develop_title}
          </button>
        </div>
        <RichText content={design_content} />
      </div>
    </Container>
  );
};

export default HomeAboutModule;
