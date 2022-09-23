export interface ChipType {
  text: string;
  variant: "active" | "nonActive";
}

export const Chip: React.FC<ChipType> = (props) => {
  return (
    <div
      className={`inline-block rounded-[4px] border border-transparent px-3 text-white
        ${props.variant == "active" ? "bg-primary-400" : ""}
        ${
          props.variant == "nonActive"
            ? "border-grey-300 bg-transparent text-grey-300"
            : ""
        }
        `}
    >
      <p className="body-3">{props.text}</p>
    </div>
  );
};
