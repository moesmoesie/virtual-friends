export interface ButtonType {
  type: "default" | "outlined";
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonType> = (props) => {
  if (props.type === "default") {
    return (
      <button
        onClick={props.onClick}
        className="button-1 rounded-lg bg-primary-400 px-5 py-2 uppercase text-white"
      >
        {props.text}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className="button-1 rounded-lg border border-primary-400 px-5 py-2 uppercase text-primary-400"
    >
      {props.text}
    </button>
  );
};
