import React from "react";
import { Container } from "../../components";

const HeaderBlock: React.FC = () => {
  return (
    <div className=" w-full z-50 fixed bg-dark-purple-400 supports-backdrop-filter:backdrop-blur-lg supports-backdrop-filter:bg-dark-purple-400/70 ">
      <Container>
        <div className="py-4 z-50">
          <a className="body-3 font-bold uppercase text-teal-500" href="#">
            Virtual Friends
          </a>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBlock;
