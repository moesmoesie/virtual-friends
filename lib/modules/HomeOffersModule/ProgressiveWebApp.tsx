import React, { useState } from "react";
import {
  AssetCard,
  AssetBarChartCard,
  AssetLineChartCard,
} from "../../components";

const ProgressiveWebApp: React.FC = () => {
  return (
    <div className="grid relative gap-5 grid-rows-[min-content,min-content] grid-cols-[min-content,min-content,min-content]">
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
