import { Blok } from "../types";
import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const AboutBlok: React.FC<{ blok: Blok }> = (props) => {
  return <HomeAboutModuleLarge {...props} />;
};

const HomeAboutModuleLarge: React.FC<{ blok: Blok }> = ({ blok }) => {
  const [show, setShow] = useState(false);

  return (
    <section {...storyblokEditable(blok)}>
      <div className="w-full relative grid place-items-center h-[650px] mt-[10vh]">
        <img
          className={`h-full left-0 blur-2xl top-0 duration-[800ms] transition-all w-full absolute`}
          src="/assets/gradient.png"
        />

        <Waypoint onEnter={() => setShow(true)}>
          <div className="absolute w-[12px] h-[12px] left-1/2 top-2/3" />
        </Waypoint>

        <div
          className={`relative flex flex-col duration-[800ms] justify-center transition-all
        ${show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
        `}
        >
          <h2 className="display-3 text-center">You design - We develop</h2>
          <p className="max-w-[550px] body-3 text-center">
            We build out your wonderfull designs and add backend functionality
            needed
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBlok;
