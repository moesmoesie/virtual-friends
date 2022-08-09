import React from "react";
import { Container } from "../../components";

const FooterBlock: React.FC = () => {
  return (
    <div className="bg-dark-purple-600">
<Container className="">
  <div className="flex justify-between py-6">

      <span className="body-2">Virtual Friends © 2022 </span>
      <a className="body-2" href="#">
        Privacy Policy
      </a>
      </div>

    </Container>
    </div>
    
  );
};

export default FooterBlock;
