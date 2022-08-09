import { Container, CompanyCard, ContactForm, GradientText, Button } from "../../components";
import { ContactBlockProps } from "./types";
import { useScreen } from "../../hooks";

const GeneralContactModule: React.FC<ContactBlockProps> = (props) => {
  const screen = useScreen()
  return (

      <Container module={props.module}>
       <h2 className="display-1 mb-10"><GradientText>{props.title}</GradientText></h2>
        <CompanyCard type={screen === 'medium' ? "horizontal" : 'verticle'}/>
      </Container>
  );
};

export default GeneralContactModule;
