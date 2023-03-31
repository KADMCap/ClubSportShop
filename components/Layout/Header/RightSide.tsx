import { NotificationIcon, HeartIcon, CartIcon } from "@/components/Icons";
import { MenuContext } from "@/context/MenuContext";
import Link from "next/link";
import React, { useContext } from "react";

const RightSide = () => {
  const { setOpenNotification } = useContext(MenuContext);
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
      <Link href="/cart" passHref>
        <CartIcon />
      </Link>
    </div>
  );
};
export default RightSide;
