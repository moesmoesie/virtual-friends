import { ChipProps } from "./types";

const Chip: React.FC<ChipProps> = ({ value }) => {
  return (
    <div className="rounded-lg bg-voilet-400 text-white px-2 py-1">
      <span className="body-1 whitespace-nowrap font-bold uppercase">
        {value}
      </span>
    </div>
  );
};

export default Chip;
