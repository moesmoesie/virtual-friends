import { Button } from "ui";
import { Container } from "ui";

const HomeLandingModule = () => {
  return (
    <>
      <div className="relative">
        <Container className="pb-32 medium:pb-48">
          {/* Start Absolute */}
          <TopGradient />
          <BottomGradient />
          <BackgroundArt />

          {/* End Absolute */}

          <p className="display-1 mb-6 mt-16 max-w-sm drop-shadow-md medium:mb-11 medium:mt-24 medium:max-w-2xl">
            Your friendly guides through the
            <span className="bg-green-purple-gradient flex-nowrap bg-clip-text text-[transparent]">
              &nbsp;virtual world
            </span>
          </p>

          <p className="body-3 mb-10 max-w-sm medium:mb-12 medium:max-w-2xl">
            We are a web development agency that can bring your web designs into
            production
          </p>
          <Button>Lets Talk!</Button>
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

const TopGradient = () => {
  return (
    <div className="bg-purple-gradient absolute left-1/2 top-full -z-30 h-96 w-[200%] -translate-y-1/4 -translate-x-1/2 overflow-hidden rounded-full opacity-70 blur-[60px] " />
  );
};

const BottomGradient = () => {
  return (
    <div className="absolute left-full -z-20 h-[400px] w-[400px] -translate-y-3/4 -translate-x-3/4 rounded-full bg-PurpleNavy/500 blur-[60px]  medium:scale-[200%]" />
  );
};

export default HomeLandingModule;
