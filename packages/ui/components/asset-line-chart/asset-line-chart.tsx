import React from "react";

export const AssetLineChartCard: React.FC = () => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
  ];

  return (
    <div className="bg-grey-p rounded-lg pt-6 pb-4 shadow-card-m">
      <img
        loading="lazy"
        src="https://a.storyblok.com/f/170199/932x271/7af8cd14ea/graph.png/m/600x0/"
      />
      <div className="flex justify-between pl-5 pr-7">
        {months.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
    </div>
  );
};
