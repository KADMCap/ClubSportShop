import { useState, Fragment, ChangeEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CloseIcon } from "../Icons";
import { ProductDetail } from "@/pages/products/[slug]";
import Image from "next/image";
import ReactStars from "react-stars";
import { Button } from "../Buttons/Button";
import { apolloClient } from "@/graphql/apolloClient";
import {
  CreateProductReviewMutationResult,
  CreateReviewDocument,
} from "@/generated/graphql";

interface AddReviewModalProps {
  product: ProductDetail;
  openReviewModal: boolean;
  handleCloseAddReviewDialog: () => void;
}

export const AddReviewModal = ({
  product,
  openReviewModal,
  handleCloseAddReviewDialog,
}: AddReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [contentError, setContentError] = useState("");

  const date = new Date();

  const handleReviewTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.currentTarget.value);
  };

  const onSubmitReview = async () => {
    if (reviewText === "") {
      setContentError("Add your review!");
      return;
    }
    if (rating === 0) {
      setRatingError("Add rating to your review!");
      return;
    }

    const data = await apolloClient.mutate<CreateProductReviewMutationResult>({
      mutation: CreateReviewDocument,
      variables: {
        id: product.id,
        reviews: {
          create: [{ content: reviewText, rating: rating, user: "John Doe" }],
        },
      },
    });

    onCloseAddReviewDialog();
  };

  const onCloseAddReviewDialog = () => {
    setReviewText("");
    setContentError("");
    setRating(0);
    setRatingError("");
    handleCloseAddReviewDialog();
  };

  return (
    <Transition appear show={openReviewModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onCloseAddReviewDialog}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto top-12">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[800px] p-6 overflow-hidden text-left align-middle transition-all transform bg-secondaryLight dark:bg-secondaryDark shadow-xl rounded-2xl">
                <section className="flex flex-row items-center justify-between pb-4">
                  <p className="pl-4 text-lg font-medium leading-6 text-black dark:text-white">
                    {product.title}
                  </p>
                  <button
                    className="bg-transparent outline-none"
                    onClick={onCloseAddReviewDialog}
                  >
                    <CloseIcon />
                  </button>
                </section>
                <section>
                  <div className="flex justify-center w-full mb-2 bg-white">
                    {product.images.slice(0, 2).map((product) => (
                      <Image
                        key={product.image.url}
                        width={400}
                        height={400}
                        style={{
                          objectFit: "contain",
                          height: "250px",
                        }}
                        src={product.image.url}
                        alt={product.alt}
                      />
                    ))}
                  </div>
                  <div>
                    <label
                      htmlFor="review"
                      className="block mt-4 mb-2 font-medium text-gray-900 text-md dark:text-white"
                    >
                      Add your review
                    </label>
                    <textarea
                      id="review"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      value={reviewText}
                      onChange={handleReviewTextChange}
                    />
                    {contentError && (
                      <span className="text-sm text-red-500">
                        {contentError}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="rating"
                      className="block mt-4 mb-2 font-medium text-gray-900 text-md dark:text-white"
                    >
                      Add your rating
                    </label>
                    <ReactStars
                      edit={true}
                      size={20}
                      half={false}
                      value={rating}
                      onChange={setRating}
                    />
                    {ratingError && (
                      <span className="text-sm text-red-500">
                        {ratingError}
                      </span>
                    )}
                  </div>
                </section>
                <div className="flex items-center justify-around w-full pt-4">
                  <Button
                    onClick={onSubmitReview}
                    size="medium"
                    variant="primary"
                  >
                    <span>Submit</span>
                  </Button>

                  <Button
                    onClick={onCloseAddReviewDialog}
                    size="medium"
                    variant="primary"
                  >
                    <span>Close</span>
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
