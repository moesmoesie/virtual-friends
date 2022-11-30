import React from "react";

export const AssetLineChartCard: React.FC = () => {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct"];

  return (
    <div className="bg-grey-p rounded-lg pt-6 pb-4 shadow-card-m">
      <img className="w-full" loading="lazy" src="https://cdn.sanity.io/images/rgkv6nti/production/70c5476d795a1e2c60e295cf2a777459a0a7dc10-932x271.png?w=500&auto=format" />
      <div className="flex justify-between pl-5 pr-7">
        {months.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
    </div>
  );
};
