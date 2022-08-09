import { InputProps } from "./types";

const Input: React.FC<InputProps> = (props) => {
  const baseStyle =
    "w-full pt-3 pb-4 border-b border-dark-purple-200 bg-[transparent] placeholder:text-grey-300 border-b-teal-500 focus:outline-none";
  switch (props.type) {
    case "dropdown":
      return <div className="w-full h-12 bg-purple-navy-600 placeholder:text-grey-300" />;
    case "multiline":
      return (
        <textarea
          className={`${baseStyle} min-h-[5rem]`}
          placeholder={props.placeholder}
        />
      );
    case "type":
      return <div className="w-full h-24 bg-PurpleNavy/200" />;
    default:
      return <input className={baseStyle} placeholder={props.placeholder} />;
  }
};

export default Input;
