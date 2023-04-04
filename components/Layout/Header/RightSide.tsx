import { NotificationIcon, HeartIcon, CartIcon } from "@/components/Icons";
import { HeaderContext } from "@/context/HeaderContext";
import { useCartState } from "@/hooks/useCartState";
import Link from "next/link";
import React, { useContext } from "react";

const RightSide = () => {
  const { setOpenNotification, setOpenCart } = useContext(HeaderContext);
  const cartState = useCartState();
  return (
    <div className="flex items-center w-[100px] justify-between">
      <button
        className="bg-transparent outline-none"
        onClick={() => setOpenNotification((prev) => !prev)}
      >
        <NotificationIcon />
      </button>
      <Link href="/favorite" passHref>
        <HeartIcon />
      </Link>
      <button
        className="bg-transparent outline-none"
        onClick={() => setOpenCart((prev) => !prev)}
      >
        <CartIcon />
        <div className="absolute w-4 h-4 text-sm text-white rounded-full right-1 bottom-3 bg-primaryBlue">
          {cartState.items.length}
        </div>
      </button>
    </div>
  );
};
export default RightSide;
