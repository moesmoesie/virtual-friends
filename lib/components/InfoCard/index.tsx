import React from "react";
import { InfoCardProps } from "./types";

const InfoCard: React.FC<InfoCardProps> = ({ title, body, icon }) => {
  return (
    <Card>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-5 large:flex-col large:items-center">
          {icon}
          <span className="body-3 text-2xl font-bold medium:text-3xl">
            {title}
          </span>
        </div>
        <p className="body-2 min-h-[4rem] large:text-center">{body}</p>
      </div>
    </Card>
  );
};

export default InfoCard;
