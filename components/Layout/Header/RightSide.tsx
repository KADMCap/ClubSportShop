import { NotificationIcon, HeartIcon, CartIcon } from "@/components/Icons";
import Link from "next/link";
import React from "react";

const RightSide = () => {
  return (
    <div className="flex items-center w-[100px] justify-between">
      <Link href="/notification" passHref>
        <NotificationIcon />
      </Link>
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
