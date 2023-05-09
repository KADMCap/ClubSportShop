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
          width={70}
          height={70}
          src={review.user.avatar}
          alt={review.user.name}
          style={{
            borderRadius: "999999px",
            objectFit: "cover",
            height: "70px",
            width: "70px",
          }}
        />
      </div>
      <div className="flex bg-white rounded-xl w-full ml-2 p-2 dark:bg-black">
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
