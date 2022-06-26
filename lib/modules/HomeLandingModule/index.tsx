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
        <div className="w-[2000px] blur-2xl opacity-20 -z-10  h-[200px]  bottom-0 bg-purple-gradient absolute" />
        <div className="w-[600px] blur-2xl -z-10 right-0 -translate-y-1/2 opacity-20 rounded-full  h-[500px] bg-PurpleNavy/5s00  top-0 bg-purple-gradient absolute" />

        <Container className="pb-32 medium:pb-48 large:min-h-[35rem]">
          <BackgroundArt />

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

const BackgroundArt = () => {
  return (
    <div className="absolute top-[-100px] left-[-158px] -z-20 w-[574px] scale-150 opacity-60 small:left-0 small:scale-[200%] medium:left-[40%] medium:top-0">
      <img src="/assets/bg-art.svg" />
    </div>
  );
};

export default HomeLandingModule;
