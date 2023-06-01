import {
  CreateReviewMutationResult,
  CreateReviewDocument,
} from "@/generated/graphql";
import { apolloClient, authorizedApolloClient } from "@/graphql/apolloClient";
import { useForm } from "react-hook-form";
import { Button, SubmitButton } from "../Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "@/mocks/users";
import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { useSession } from "next-auth/react";
import { Session } from "next-auth/core/types";

export interface Props {
  productId: string;
  userData: Session | null;
}

const schema = yup
  .object({
    content: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const NewReview = ({ productId, userData }: Props) => {
  const session = useSession();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [contentError, setContentError] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    console.log("Comment");
    if (rating === 0) {
      setRatingError("Add rating to your review!");
      return;
    }

    const payload = {
      productId,
      content: data.content,
      rating,
      userData,
    };
    await apolloClient.mutate<CreateReviewMutationResult>({
      mutation: CreateReviewDocument,
      variables: {
        productId: productId,

        content: data.content,
        rating: rating,
      },
    });
    // const response = await fetch("/api/reviews/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });
    // console.log(response);
    // if (response.ok) {
    //   console.log("review added");
    // }
  });

  return (
    <form className="flex flex-row pb-4" onSubmit={onSubmit}>
      <div className="w-10 h-10 bg-blue-400 rounded-full">
        {/* <Image
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
        /> */}
      </div>
      <div className="flex w-full p-2 ml-2 bg-white rounded-xl dark:bg-black">
        <div className="flex flex-col w-full gap-1">
          <span>UserName</span>
          <div className="flex flex-row items-center gap-2">
            <span>{rating}/5</span>
            <ReactStars
              edit={true}
              size={20}
              half={false}
              value={rating}
              onChange={setRating}
            />
            {ratingError && (
              <span className="text-sm text-red-500">{ratingError}</span>
            )}
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm dark:text-white">Review</label>
            <textarea
              className="w-full border min-h-[100px] border-primaryBlue rounded-md p-2"
              placeholder="Your opinion about this product"
              required
              {...register("content")}
            />
          </div>
          <div className="flex justify-center w-full">
            <SubmitButton value="Submit" />
          </div>
        </div>
      </div>
    </form>
  );
};
