import React from "react";
import { IconButtonProps } from "./types";

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <div className="grid shadow-card-m h-14 w-14 place-items-center rounded-lg bg-white">
      {icon}
    </div>
  );
};

export default IconButton;
