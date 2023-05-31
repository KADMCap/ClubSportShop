import { User } from "@/mocks/users";
import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";

export interface ReviewProps {
  id: string;
  user: User;
  date: string;
  rating: number;
  description: string;
}

export const Review = (review: ReviewProps) => {
  return (
    <div className="flex flex-row">
      <div>
        <Image
          width={40}
          height={40}
          src={review.user.avatar}
          alt={review.user.name}
          style={{
            borderRadius: "100%",
            objectFit: "cover",
            height: "40px",
            width: "40px",
          }}
        />
      </div>
      <div className="flex w-full p-2 ml-2 bg-white rounded-xl dark:bg-black">
        <div className="flex flex-col">
          <span>{review.user.name}</span>
          <span className="text-sm text-primaryGray">{review.date}</span>
          <div className="flex flex-row gap-2">
            <span>{review.rating}/5</span>
            <ReactStars edit={false} value={review.rating} />
          </div>
          <span>{review.description}</span>
        </div>
      </div>
    </div>
  );
};
