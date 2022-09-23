export interface OptionType {
  name: string;
  value: string;
}

export interface PopoverType {
  options: OptionType[];
  currentOptionIndex: number;
  setOption: (name: string) => void;
}

export const Popover: React.FC<PopoverType> = (props) => {
  return (
    <div className="inline-flex flex-col rounded-lg bg-neutral-400 py-3 shadow-m">
      {props.options.map((el, index) => {
        const isActive =
          props.options[props.currentOptionIndex].value === el.value;
        return (
          <button
            key={index}
            onClick={() => props.setOption(el.name)}
            className="body-3 flex items-center justify-between px-2 py-1.5"
          >
            <span className="pr-6 text-black">{el.name}</span>
            <div
              className={`h-3 w-3 rounded-full ${
                isActive ? "bg-primary-400" : "bg-black"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
