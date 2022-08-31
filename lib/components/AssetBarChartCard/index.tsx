const AssetBarChartCard: React.FC = () => {
  return (
    <div className="bg-grey-p pr-7 rounded-lg p-6 shadow-card-m">
      <p className="body-1 font-bold">Total Earning</p>
      <div className="flex gap-4 items-baseline">
        <p className="body-1 -mt-1 text-[28px] font-bold">$30.000</p>
        <p className="body-1 text-voilet-400">+23%</p>
      </div>
      <div className="flex mt-2 gap-2 w-full justify-between">
        {[0.9, 0.87, 0.4, 0.9, 0.84, 1, 0.5, 0.4, 0.3].map((el, index) => {
          return (
            <div
              key={index}
              className="w-2 h-[75px] overflow-hidden bg-grey-100 rounded-md"
            >
              <div
                style={{ transform: `translateY(${(1 - el) * 100}%)` }}
                className="w-full h-full rounded-md origin-bottom bg-voilet-400"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssetBarChartCard;
