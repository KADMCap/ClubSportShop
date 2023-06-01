/* eslint-disable @next/next/no-img-element */
import { User } from "@/mocks/users";
import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";

export interface ReviewProps {
  id: string;
  user: User;
  date: string;
  rating: number;
  content: string;
}

export const Review = (review: ReviewProps) => {
  return (
    <div className="flex flex-row">
      <div>
        <img
          src={review.user.avatar}
          alt={review.user.name}
          className="object-cover w-10 h-10 rounded-full"
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
          <span>{review.content}</span>
        </div>
      </div>
    </div>
  );
};
