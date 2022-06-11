import React from "react";

interface InfoCardProps {
  title: string;
  body: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, body }) => {
  return (
    <div className="rounded-3xl bg-PurpleNavy/600 p-5">
      <div className="mb-3 flex items-center gap-5 large:flex-col large:items-center">
        <Icon />
        <span className="body-3 text-2xl font-bold medium:text-3xl">
          {title}
        </span>
      </div>
      <p className="body-2 min-h-[4rem] large:text-center">{body}</p>
    </div>
  );
};

const Icon = () => {
  return (
    <div className="h-6 w-6 rounded-full bg-Teal/500 large:h-12 large:w-12" />
  );
};

export default InfoCard;
