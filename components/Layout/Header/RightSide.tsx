import {
  NotificationIcon,
  HeartIcon,
  CartIcon,
  SearchIcon,
} from "@/components/Icons";
import { HeaderContext } from "@/context/HeaderContext";
import { useCartState } from "@/hooks/useCartState";
import React, { useContext } from "react";

export const RightSide = () => {
  const {
    setOpenNotification,
    setOpenCart,
    setOpenFavoriteModal,
    setOpenSearchBar,
  } = useContext(HeaderContext);
  const cartState = useCartState();
  return (
    <div className="flex items-center justify-end w-full gap-2">
      <button
        className="bg-transparent outline-none sm:hidden"
        onClick={() => setOpenSearchBar(true)}
      >
        <SearchIcon />
      </button>
      <button
        className="bg-transparent outline-none"
        onClick={() => setOpenNotification((prev) => !prev)}
      >
        <NotificationIcon />
      </button>
      <button
        className="bg-transparent outline-none"
        onClick={() => setOpenFavoriteModal((prev) => !prev)}
      >
        <HeartIcon />
      </button>
      <button
        className="relative bg-transparent outline-none z-2"
        onClick={() => setOpenCart((prev) => !prev)}
      >
        <CartIcon />
        <div className="absolute w-4 h-4 text-sm text-white rounded-full -right-1 top-4 bg-primaryBlue">
          {cartState.items.length}
        </div>
      </button>
    </div>
  );
};
