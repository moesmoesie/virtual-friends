import React from "react";

interface IconButtonProps {
  icon: JSX.Element;
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <div className="grid h-14 w-14 place-items-center rounded-lg border-[3px] border-DarkPurple/600 bg-DarkPurple/500 shadow-inner">
      {icon}
    </div>
  );
};

export default IconButton;
