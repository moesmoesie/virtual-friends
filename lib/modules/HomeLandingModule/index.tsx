import { RichText, Container, Button } from "../../components";
import { HomeLandingModuleProps } from "./types";

const HomeLandingModule: React.FC<HomeLandingModuleProps> = ({
  title = "Placeholder Title",
  subtitle = "Placeholder Subtitle",
  button,
}) => {
  return (
    <>
      <div className="relative pt-12 overflow-hidden">
        <Container className="pb-32 medium:pb-48 large:min-h-[35rem]">
          <div className="mb-6 mt-16 max-w-[350px] small:max-w-[500px] medium:mb-11 medium:mt-24 medium:max-w-xl">
            <RichText content={title} />
          </div>

          <div className="mb-10 max-w-sm medium:mb-12 medium:max-w-2xl">
            <RichText content={subtitle} />
          </div>

          {button !== undefined ? (
            <Button>
              <span className="body-3 inline-block px-8 py-3">
                {button?.content}
              </span>
            </Button>
          ) : (
            <></>
          )}
        </Container>
      </div>
    </>
  );
};

export default HomeLandingModule;
