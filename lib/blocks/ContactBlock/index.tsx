import { Container, CompanyCard, ContactForm, GradientText, Button } from "../../components";
import { ContactBlockProps } from "./types";
import { useScreen } from "../../hooks";

const GeneralContactModule: React.FC<ContactBlockProps> = (props) => {
  const screen = useScreen()
  return (

    <div className="bg-dark-purple-600 py-16 large:py-32">
      <Container>
       <h2 className="display-1 mb-10"><GradientText>Get in touch</GradientText></h2>
        <CompanyCard type={screen === 'medium' ? "horizontal" : 'verticle'}/>
      </Container>
    </div>
  );
};

export default GeneralContactModule;
