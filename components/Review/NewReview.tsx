/* eslint-disable @next/next/no-img-element */
import {
  CreateReviewMutationResult,
  CreateReviewDocument,
} from "@/generated/graphql";
import { apolloClient } from "@/graphql/apolloClient";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { Session } from "next-auth/core/types";
import { CreateReviewMutationFn } from "@/generated/graphql";

export interface Props {
  productId: string;
  userData: Session | null;
  setNewReview: (data: any) => void;
  handleAddNewReview: () => void;
}

const schema = yup
  .object({
    content: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const NewReview = ({
  productId,
  userData,
  setNewReview,
  handleAddNewReview,
}: Props) => {
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { avatar, fullName, id } = userData?.user!;

  const onSubmit = handleSubmit(async (data: FormData) => {
    console.log("Comment");
    if (rating === 0) {
      setRatingError("Add rating to your review!");
      return;
    }

    const response = await apolloClient.mutate({
      mutation: CreateReviewDocument,
      variables: {
        productId: productId,
        content: data.content,
        rating: rating,
        userAvatar: avatar,
        userId: id,
        userName: fullName,
      },
    });
    console.log(response);
    if (response.data) {
      setNewReview(response.data.createReview);
    }
    handleAddNewReview();
  });

  return (
    <form className="flex flex-row pb-4" onSubmit={onSubmit}>
      {avatar ? (
        <img
          src={avatar}
          alt={fullName!}
          className="object-cover w-10 h-10 rounded-full"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-primaryBlue" />
      )}

      <div className="flex w-full p-2 ml-2 bg-white rounded-xl dark:bg-black">
        <div className="flex flex-col w-full gap-1">
          <span className="text-sm font-semibold">{fullName}</span>
          <div className="flex flex-row items-center gap-2 text-sm">
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
