import React, { useState } from "react";
import {
  AssetCard,
  AssetBarChartCard,
  AssetLineChartCard,
} from "../../components";

const ProgressiveWebApp: React.FC = () => {
  return (
    <div className="grid relative gap-5 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content,min-content]">
      <div className="w-[500px] blur-2xl opacity-60 -z-10 rounded-full h-[500px] bg-PurpleNavy/500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />
      <div className="-translate-y-0">
        <AssetCard />
      </div>
      <div className="translate-y-8">
        <AssetBarChartCard />
      </div>
      <div className="translate-y-24">
        <AssetCard />
      </div>
      <div className="col-span-3 -z-10  -translate-y-4 pr-5">
        <AssetLineChartCard />
      </div>
    </div>
  );
};

export default ProgressiveWebApp;
