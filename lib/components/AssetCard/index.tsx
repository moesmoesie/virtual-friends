import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AssetCard: React.FC = () => {
  return (
    <div className="bg-DarkPurple/600 rounded-lg pt-6 pl-5 pr-7 pb-4 shadow-2xl">
      <div className="w-11 grid place-items-center h-11 rounded-lg bg-Nyanza/500">
        <FontAwesomeIcon
          className="text-Teal/500 text-xl"
          icon={["fab", "btc"]}
        />
      </div>
      <p className="body-1 mt-3 font-bold text-PurpleNavy/050">Portfolio</p>
      <p className="body-1 -mt-2 text-[28px] font-bold">52,7K</p>
      <p className="body-1 text-Teal/500">+23%</p>
    </div>
  );
};

export default AssetCard;
