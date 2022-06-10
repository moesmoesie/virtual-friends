import { Button } from "ui";

const HomeLandingModule = () => {
  return (
    <>
      <div>
        <div className="md:px-16 max-w-6xl bg-DarkPurple/400 px-4 py-4">
          <a className="body-3 font-bold uppercase text-Teal/500" href="#">
            Virtual Friends
          </a>
        </div>
      </div>

      <div className="md:px-16 mt-16 max-w-6xl px-4">
        <p className="display-1 mb-6 drop-shadow-md">
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
      </div>
    </>
  );
};

export default HomeLandingModule;
