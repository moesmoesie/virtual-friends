import { ModuleType } from "./types";
import { Container, Button, Markdown } from "ui-components";

export interface HomeLandingType extends ModuleType {
  title: string;
  subtitle: string;
}

export const HomeLanding: React.FC<HomeLandingType> = (props) => {
  return (
    <Container {...props.module}>
      <div className="flex text-black flex-col gap-8">
        <h1 className="headline-4 medium:headline-2 large:headline-1">
          <Markdown content={props.title} />
        </h1>
        <p className="body-1 max-w-xs medium:max-w-md large:max-w-lg">
          <Markdown content={props.subtitle} />
        </p>
        <div className="flex gap-4">
          <Button text="Send an email" type="default" />
          <Button text="Whatsapp Us" type="outlined" />
        </div>
      </div>
    </Container>
  );
};
