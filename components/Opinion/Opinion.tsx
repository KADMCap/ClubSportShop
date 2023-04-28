import { User } from "@/mocks/users";
import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";

export interface OpinionProps {
  id: string;
  user: User;
  date: string;
  rating: number;
  description: string;
}

export const Opinion = (opinion: OpinionProps) => {
  return (
    <div className="flex flex-row">
      <div>
        <Image
          width={70}
          height={70}
          src={opinion.user.avatar}
          alt={opinion.user.name}
          style={{
            borderRadius: "999999px",
            objectFit: "cover",
            height: "70px",
            width: "70px",
          }}
          //   style={{
          //     objectFit: "contain",
          //     height: "150px",
          //   }}
        />
      </div>
      <div className="flex bg-white rounded-xl w-full ml-2 p-2 dark:bg-black">
        <div className="flex flex-col">
          <span>{opinion.user.name}</span>
          <span className="text-sm text-primaryGray">{opinion.date}</span>
          <div className="flex flex-row gap-2">
            <span>{opinion.rating}/5</span>
            <ReactStars edit={false} value={opinion.rating} />
          </div>
          <span>{opinion.description}</span>
        </div>
      </div>
    </div>
  );
};
