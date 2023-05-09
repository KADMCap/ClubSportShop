import { useState, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeaderContext } from "@/context/HeaderContext";
import ProductCard from "./ProductCard";
import { useQuery } from "react-query";
import { CloseIcon } from "./Icons";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  favoriteModalIsOpen,
  setOpenFavoriteModal,
} from "@/redux/slices/headerSlice";

export const FavoriteModal = () => {
  // const { openFavoriteModal, setOpenFavoriteModal } = useContext(HeaderContext);

  const dispatch = useAppDispatch();
  const openFavoriteModal = useAppSelector(favoriteModalIsOpen);
  const { data } = useQuery(["favProducts"], () =>
    fetch(`https://naszsklep-api.vercel.app/api/products`).then((res) =>
      res.json()
    )
  );

  const handleDialogClose = () => {
    dispatch(setOpenFavoriteModal());
  };

  return (
    <Transition appear show={openFavoriteModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleDialogClose}>
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
              <Dialog.Panel className="w-full max-w-[1200px] p-6 overflow-hidden text-left align-middle transition-all transform bg-secondaryLight dark:bg-secondaryDark shadow-xl rounded-2xl">
                <section className="flex flex-row items-center justify-between pb-4">
                  <p className="text-lg font-medium leading-6 text-black dark:text-white">
                    My favorite products
                  </p>
                  <button
                    className="bg-transparent outline-none"
                    onClick={handleDialogClose}
                  >
                    <CloseIcon />
                  </button>
                </section>
                <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4">
                  {data?.map((product: any, index: any) => {
                    return (
                      <ProductCard
                        key={product.id}
                        id={product.id.toString()}
                        title={product.title}
                        image={product.image}
                        slug={"test"}
                        sale={false}
                        sizes={["xl"]}
                        prices={[{ date: "12-12-2022", price: 129 }]}
                        category={product.category}
                      />
                    );
                  })}
                </div>

                <div className="items-center justify-center w-full pt-4">
                  <button
                    type="button"
                    className="justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleDialogClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
