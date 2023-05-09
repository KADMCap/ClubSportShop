import {
  useState,
  Fragment,
  useContext,
  Dispatch,
  SetStateAction,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CloseIcon } from "./Icons";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import cartSlice from "@/redux/slices/cartSlice";
import { ProductDetail } from "@/pages/products/[slug]";
import Image from "next/image";
import ReactStars from "react-stars";
import { Button } from "./Buttons/Button";

interface AddOpinionModalProps {
  product: ProductDetail;
  openOpinionModal: boolean;
  handleCloseAddOpinionDialog: () => void;
}

export const AddOpinionModal = ({
  product,
  openOpinionModal,
  handleCloseAddOpinionDialog,
}: AddOpinionModalProps) => {
  const [rating, setRating] = useState(0);
  const [opinionText, setOpinionText] = useState("");

  const handleOpinionTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOpinionText(e.currentTarget.value);
  };

  const onSubmitRating = () => {
    console.log("on submit opinion");
    handleCloseAddOpinionDialog();
  };

  return (
    <Transition appear show={openOpinionModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={handleCloseAddOpinionDialog}
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
                  <p className="text-lg font-medium leading-6 pl-4 text-black dark:text-white">
                    {product.title}
                  </p>
                  <button
                    className="bg-transparent outline-none"
                    onClick={handleCloseAddOpinionDialog}
                  >
                    <CloseIcon />
                  </button>
                </section>
                <section>
                  <div className="flex justify-center w-full mb-2 bg-white">
                    {product.images.slice(0, 2).map((product) => (
                      <Image
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
                      htmlFor="opinion"
                      className="block mt-4 mb-2 text-md font-medium text-gray-900 dark:text-white"
                    >
                      Add your opinion
                    </label>
                    <textarea
                      id="opinion"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      value={opinionText}
                      onChange={handleOpinionTextChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rating"
                      className="block mt-4 mb-2  text-md font-medium text-gray-900 dark:text-white"
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
                  </div>
                </section>
                <div className="flex items-center justify-around w-full pt-4">
                  <Button
                    onClick={onSubmitRating}
                    size="medium"
                    variant="primary"
                  >
                    <span>Submit</span>
                  </Button>

                  <Button
                    onClick={handleCloseAddOpinionDialog}
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
