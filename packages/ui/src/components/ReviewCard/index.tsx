import React from "react";
import Card from "../Card";
import { ReviewCardProps } from "./types";

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card>
      <div className="flex min-h-[200px] w-[300px] flex-col items-center p-5 text-center">
        <img src={review.image} className="mb-3 h-14 w-14 rounded-full" />
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
