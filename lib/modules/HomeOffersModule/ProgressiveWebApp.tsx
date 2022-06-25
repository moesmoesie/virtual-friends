import React, { useState } from "react";
import {
  AssetCard,
  AssetBarChartCard,
  AssetLineChartCard,
  BlurredRadialGradient,
} from "../../components";

const ProgressiveWebApp: React.FC = () => {
  return (
    <div className="grid relative gap-5 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content,min-content]">
      <div className="absolute left-1/2 top-1/2 -z-50 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 text-PurpleNavy/500">
        <BlurredRadialGradient />
      </div>
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
