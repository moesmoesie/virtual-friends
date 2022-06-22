import React, { useState } from "react";
import { Product, Button, Receipt, IconButton, ReviewCard } from "ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlurredRadialGradient } from "ui";

const Company: React.FC = () => {
  return (
    <div className="relative hidden flex-1 grid-cols-[min-content,min-content] gap-7 large:grid">
      <ReviewCard
        review={{
          name: "Jane Caboosy",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          company: "Caboosy inc",
          image: "/assets/woman.png",
        }}
      />
    </div>
  );
};

export default Company;
