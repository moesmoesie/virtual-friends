export interface CardType {
  variant: "vertical" | "horizontal" | "large";
  icon: JSX.Element;
  title: string;
  body: string;
}

export const Card: React.FC<CardType> = (props) => {
  if (props.variant === "large")
    return (
      <div className="relative px-7 max-w-[360px] py-5 gap-3 flex flex-col text-center items-center shadow-m rounded-2xl bg-white">
        <div className="w-[100px] h-[100px]">{props.icon}</div>
        <p className="subtitle-2 text-black">{props.title}</p>
        <p className="body-1 text-black">{props.body}</p>
      </div>
    );

  if (props.variant === "horizontal")
    return (
      <div className="relative p-6 gap-1.5 flex max-w-[330px] flex-col shadow-m rounded-2xl bg-white">
        <div className="flex gap-1.5 items-center">
          <div className="w-8 h-8">{props.icon}</div>
          <p className="subtitle-3 text-black">{props.title}</p>
        </div>
        <p className="body-3 text-black">{props.body}</p>
      </div>
    );

  return (
    <div className="relative p-5 gap-3 flex flex-col text-center items-center max-w-[200px] shadow-m rounded-2xl bg-white">
      <div className="w-[75px] h-[75px]">{props.icon}</div>
      <p className="subtitle-3 text-black">{props.title}</p>
      <p className="body-3 text-black">{props.body}</p>
    </div>
  );
};
