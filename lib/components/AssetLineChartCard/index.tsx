const AssetLineChartCard: React.FC = () => {
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
    <div className="bg-dark-purple-600 rounded-lg pt-6 pb-4 shadow-2xl">
      <img src="assets/graph.png" alt="chart" />
      <div className="flex justify-between pl-5 pr-7">
        {months.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
    </div>
  );
};

export default AssetLineChartCard;
