import { Button } from "ui";
import { Container } from "ui";

const HomeLandingModule = () => {
  return (
    <>
      <div className="w-full bg-DarkPurple/400">
        <Container className="py-4">
          <a className="body-3 font-bold uppercase text-Teal/500" href="#">
            Virtual Friends
          </a>
        </Container>
      </div>

      <Container className="relative overflow-hidden pb-32">
        {/* Background Art */}
        <div className="absolute -left-1/4 -top-1/4 -z-10 h-full w-[600px]">
          <img src="/assets/bg-art.png" />
        </div>

        {/* Gradient */}
        <div className="bg-purple-gradient absolute left-1/2 top-full -z-20 h-96 w-[200%] -translate-y-1/4 -translate-x-1/2 overflow-hidden rounded-full opacity-70 blur-[60px] " />

        <div className="absolute left-full h-[400px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-PurpleNavy/500 blur-[100px]" />

        <p className="display-1 mb-6 mt-16 max-w-sm drop-shadow-md">
          Your friendly guides through the
          <span className="bg-green-purple-gradient flex-nowrap bg-clip-text text-[transparent]">
            &nbsp;virtual world
          </span>
        </p>

        <p className="body-3 mb-10 max-w-sm">
          We are a web development agency that can bring your web designs into
          production
        </p>
        <Button>Lets Talk!</Button>
      </Container>
    </>
  );
};

export default HomeLandingModule;
