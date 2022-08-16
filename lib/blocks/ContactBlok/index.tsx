import { storyblokEditable } from "@storyblok/react";
import { Container, CompanyCard, GradientText, Button } from "../../components";
import { useScreen } from "../../hooks";
import { Blok } from "../types";

const GeneralContactModule: React.FC<{ blok: Blok }> = ({ blok }) => {
  const screen = useScreen();
  return (
    <section {...storyblokEditable(blok)}>
      <Container module={blok}>
        <h2 className="display-1 mb-8">
          <GradientText>{blok?.title}</GradientText>
        </h2>
        <div className="flex gap-[60px] flex-col large:flex-row">
          <form className="flex-1 gap-3 gap-x-6 grid medium:grid-cols-2">
            <Input placeholder="Name" name="name" />
            <Input placeholder="Company" name="company" />
            <Input placeholder="Telephone" name="telephone" />
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="Catagory" name="catagory" />
            <Input placeholder="Budget" name="budget" />
            <div className="col-span-2">
              <Input type="multiline" placeholder="Message" name="message" />
            </div>

            <div className="mt-8">
              <Button type="accent">
                <span className="body-2 whitespace-nowrap">Send Message</span>
              </Button>
            </div>
          </form>
          <div className="large:-translate-y-24">
            <CompanyCard
              type={screen === "medium" ? "horizontal" : "verticle"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

interface InputProps {
  name: string;
  placeholder: string;
  type?: "multiline";
}

const Input: React.FC<InputProps> = (props) => {
  if (props.type === "multiline") {
    return (
      <div>
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          className="border-b medium:min-h-[107px] placeholder:text-white medium:py-4 outline-none placeholder:body-2 py-3 border-dark-purple-200 w-full bg-transparent"
        />
      </div>
    );
  }

  return (
    <div>
      <input
        name={props.name}
        placeholder={props.placeholder}
        className="border-b placeholder:text-white outline-none placeholder:body-2 py-3 medium:py-4 border-dark-purple-200 w-full bg-transparent"
      />
    </div>
  );
};

export default GeneralContactModule;
