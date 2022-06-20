import { Container, CompanyCard } from "ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface GeneralContactModuleProps {
  title: string;
}

const GeneralContactModule: React.FC<GeneralContactModuleProps> = ({
  title,
}) => {
  return (
    <div className="bg-DarkPurple/600 py-20">
      <Container>
        <h2 className="gradient-text display-1  mb-9 inline-block">{title}</h2>
        <div>
          <div className="medium:hidden large:block">
            <CompanyCard
              type="verticle"
              phoneIcon={
                <FontAwesomeIcon className="text-Teal/500" icon="phone" />
              }
              mailIcon={
                <FontAwesomeIcon className="text-Teal/500" icon="envelope" />
              }
            />
          </div>

          <div className="hidden medium:block large:hidden">
            <CompanyCard
              type="horizontal"
              phoneIcon={
                <FontAwesomeIcon className="text-Teal/500" icon="phone" />
              }
              mailIcon={
                <FontAwesomeIcon className="text-Teal/500" icon="envelope" />
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GeneralContactModule;
