import { Chip } from "components/chip";

type stateType = "selected" | "not-selected";

export interface CheckboxType {
  isSelected: boolean;
  text: string;
  onChange: (isSelected: boolean) => void;
}

export const Checkbox: React.FC<CheckboxType> = (props) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => props.onChange(!props.isSelected)}
        className={`group relative h-5 w-5 rounded-sm border-[3px] border-black
            ${props.isSelected ? "bg-black" : ""}
        `}
      >
        <div className="absolute top-0 left-0 -z-10 h-full w-full scale-[2.2] rounded-sm bg-neutral-500 opacity-0 group-hover:opacity-100" />
      </button>
      <p className="body-2">{props.text}</p>
    </div>
  );
};
