import React from "react";
import StoryblokImage from "../StoryblokImage";
import { ReviewCardProps } from "./types";

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card>
      <div className="flex min-h-[200px] w-[300px] flex-col items-center p-5 text-center">
        <StoryblokImage
          filename={review.image}
          width={300}
          height={300}
          is_external_url={false}
          alt={"Headshot of reviewer"}
          className="mb-3 h-16 w-16 rounded-full object-cover"
        />
        <p className="body-2 mb-3">{review.body}</p>
        <p className="body-1">
          <span className="font-bold">{review.name}</span>
          <span> - </span>
          <span>{review.company}</span>
        </p>
      </div>
    </Card>
  );
};

export default ReviewCard;
