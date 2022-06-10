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

      <Container>
        <p className="display-1 mb-6 mt-16 drop-shadow-md">
          Your friendly guides through the
          <span className="bg-green-purple-gradient flex-nowrap bg-clip-text text-[transparent]">
            &nbsp;virtual world
          </span>
        </p>
        <p className="body-3 mb-10">
          We are a web development agency that can bring your web designs into
          production
        </p>
        <Button>Lets Talk!</Button>
      </Container>
    </>
  );
};

export default HomeLandingModule;
