import React from "react";
import { Container } from "../../components";

const FooterBlock: React.FC = () => {
  return (
    <Container className="flex justify-between py-6">
      <span className="body-2">Virtual Friends © 2022 </span>
      <a className="body-2" href="#">
        Privacy Policy
      </a>
    </Container>
  );
};

export default FooterBlock;
