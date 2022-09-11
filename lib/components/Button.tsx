export interface ButtonType {
  type: "default" | "outlined";
  text: string;
}

export const Button: React.FC<ButtonType> = (props) => {
  if (props.type === "default") {
    return (
      <button className="button-1 rounded-lg px-5 uppercase bg-primary-400 text-white py-2">
        {props.text}
      </button>
    );
  }

  return (
    <button className="button-1 rounded-lg px-5 border uppercase border-primary-400 text-primary-400 py-2">
      {props.text}
    </button>
  );
};
