import { HeaderContext } from "@/context/HeaderContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { CouponInput } from "./CouponInput";

export const CartDrawer = () => {
  const { openCart } = useContext(HeaderContext);
  return (
    <aside
      className={`absolute bg-primary justify-between flex flex-col p-4 w-full h-[calc(100vh_-_64px)] t-12 right-0 transition-transform duration-300 md:absolute md:w-[400px] divide-y divide-primaryBlue translate-x-0 bg-primaryLight dark:bg-primaryDark ${
        !openCart && "hidden"
      } `}
    >
      <div className="flex flex-col gap-1">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex flex-col w-full gap-4 py-4">
        <CouponInput />
        Summary
      </div>
    </aside>
  );
};
