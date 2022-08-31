import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { FadeInProps } from "./types";

const FadeIn: React.FC<FadeInProps> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Waypoint
      bottomOffset={"100px"}
      onEnter={() => {
        setShow(true);
      }}
    >
      <div
        className={`duration-[400ms] transition-all ease-in-out  ${
          show ? "opacity-100 translate-y-0" : " opacity-0 translate-y-20"
        }`}
      >
        {props.children}
      </div>
    </Waypoint>
  );
};

export default FadeIn;
