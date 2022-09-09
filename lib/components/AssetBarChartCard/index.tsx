interface AssetBarChartCardType {
  title: string;
  currency: "euro" | "dollar";
  amount: number;
  values: number[];
}

const AssetBarChartCard: React.FC<AssetBarChartCardType> = (props) => {
  return (
    <div className="bg-grey-p pr-7 inline-block rounded-lg p-6 shadow-card-m">
      <p className="body-1 font-bold">{props.title}</p>
      <div className="flex gap-4 items-baseline">
        <p className="body-1 -mt-1 text-[28px] font-bold">
          {props.currency === "dollar" ? "$" : ""}
          {props.currency === "euro" ? "€" : ""}
          {props.amount}
        </p>
      </div>
      <div className="flex mt-2 gap-3 w-full justify-start">
        {props.values.map((el, index) => {
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
