/* eslint-disable @next/next/no-img-element */
import { Review } from "@/generated/graphql";
import React from "react";
import ReactStars from "react-stars";

export function Review(review: Review) {
  return (
    <div className="flex flex-row">
      {review.userAvatar ? (
        <img
          src={review.userAvatar || ""}
          alt={review.userName || ""}
          className="object-cover w-10 h-10 rounded-full"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-primaryBlue" />
      )}

      <div className="flex w-full p-2 ml-2 bg-white rounded-xl dark:bg-black">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{review.userName}</span>
          <span className="text-sm text-primaryGray">
            {review.createdAt.slice(0, 10)}
          </span>
          <div className="flex flex-row items-center gap-2 text-sm">
            <span>{review.rating}/5</span>
            <ReactStars edit={false} value={review.rating} />
          </div>
          <span>{review.content}</span>
        </div>
      </div>
    </div>
  );
}
