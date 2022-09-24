interface BaseCardType {
  icon: JSX.Element;
  title: string;
  body: string;
}

interface HorizontalCardType extends BaseCardType {
  mode: "horizontal";
  size: "normal";
}

interface VerticalCardType extends BaseCardType {
  mode: "vertical";
  size: "normal" | "large";
}

export type CardType = HorizontalCardType | VerticalCardType;

export const Card: React.FC<CardType> = (props) => {
  if (props.mode === "vertical" && props.size === "large")
    return (
      <div className="relative flex max-w-[360px] flex-col items-center gap-3 overflow-hidden rounded-2xl bg-white px-7 py-5 text-center shadow-m">
        <div className="h-[100px] w-[100px]">{props.icon}</div>
        <p className="subtitle-2 text-black">{props.title}</p>
        <p className="body-1 text-black">{props.body}</p>
      </div>
    );

  if (props.mode === "vertical" && props.size === "normal")
    return (
      <div className="relative flex max-w-[200px] flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-m">
        <div className="h-[75px] w-[75px]">{props.icon}</div>
        <p className="subtitle-3 text-black">{props.title}</p>
        <p className="body-3 text-black">{props.body}</p>
      </div>
    );

  return (
    <div className="relative flex max-w-[330px] flex-col gap-1.5 overflow-hidden rounded-2xl bg-white p-6 shadow-m">
      <div className="flex items-center gap-1.5">
        <div className="h-8 w-8 shrink-0">{props.icon}</div>
        <p className="subtitle-3 max-w-full flex-1 text-black">{props.title}</p>
      </div>
      <p className="body-3 text-black">{props.body}</p>
    </div>
  );
};
