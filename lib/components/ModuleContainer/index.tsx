import { ModuleContainerProps } from "./types";
import Container from "../Container";

const ModuleContainer: React.FC<ModuleContainerProps> = ({
  children,
  title,
}) => {
  return (
    <Container className="py-12">
      <div>
        {title && (
          <h2 className="gradient-text display-1 mb-4 medium:mb-8 large:mb-12 inline-block">
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </Container>
  );
};

export default ModuleContainer;
