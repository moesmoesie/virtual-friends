import React from "react";

interface AssetCardType {
  Icon: JSX.Element;
  value: string;
  percentage: string;
}

export const AssetCard: React.FC<AssetCardType> = (props) => {
  return (
    <div className="bg-grey-p rounded-lg pt-6 pl-5 pr-7 pb-4 shadow-card-m">
      <div className="w-11 grid place-items-center h-11 rounded-lg bg-grey-100">
        <div className="fill-voilet-400">{props.Icon}</div>
      </div>
      <p className="body-1 mt-3 font-bold">Portfolio</p>
      <p className="body-1 -mt-2 text-[28px] font-bold">{props.value}</p>
      <p className="body-1 text-voilet-400">{props.percentage}</p>
    </div>
  );
};
