import { NotificationIcon, HeartIcon, CartIcon } from "@/components/Icons";
import { HeaderContext } from "@/context/HeaderContext";
import Link from "next/link";
import React, { useContext } from "react";

const RightSide = () => {
  const { setOpenNotification, setOpenCart } = useContext(HeaderContext);
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
      </button>
    </div>
  );
};
export default RightSide;
