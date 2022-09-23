import { ImageType, Image } from "../image";

export interface ReviewType {
  image: ImageType;
  body: string;
  name: string;
  company: string;
}

export const Review: React.FC<ReviewType> = (props) => {
  return (
    <div className="flex min-h-[200px] w-[300px] flex-col items-center rounded-lg bg-white p-5 text-center shadow-m">
      <Image
        {...props.image}
        className="mb-3 h-16 w-16 rounded-full object-cover"
      />
      <p className="body-1 mb-3">{props.body}</p>
      <p className="body-3">
        <span className="font-bold">{props.name}</span>
        <span> - </span>
        <span>{props.company}</span>
      </p>
    </div>
  );
};
