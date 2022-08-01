import React from "react";
import { IconButtonProps } from "./types";

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 4px 5px rgba(0, 0, 0, 0.3), 0px 9px 10px rgba(0, 0, 0, 0.2), 0px 14px 32px rgba(0, 0, 0, 0.1), 0px 32px 44px rgba(0, 0, 0, 0.25)",
      }}
      className="grid h-14 w-14 place-items-center rounded-lg border-[3px] border-dark-purple-600 bg-dark-purple-500"
    >
      {icon}
    </div>
  );
};

export default IconButton;
