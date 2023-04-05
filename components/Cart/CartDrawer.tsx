import { HeaderContext } from "@/context/HeaderContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { CouponInput } from "./CouponInput";
import { SummaryBox } from "./SummaryBox";
import { Button } from "../Buttons/Button";
import { CartContext } from "@/context/CartContext";
import { useCartState } from "@/hooks/useCartState";
import Link from "next/link";

export const CartDrawer = () => {
  const { openCart } = useContext(HeaderContext);
  const cartState = useCartState();

  return (
    <aside
      className={`absolute bg-primary justify-between flex flex-col py-4 px-2 w-full h-[calc(100vh_-_64px)] t-12 right-0 transition-transform duration-300 md:absolute md:w-[400px] divide-y divide-primaryBlue translate-x-0 bg-primaryLight dark:bg-primaryDark ${
        !openCart && "hidden"
      } `}
    >
      <div className="flex flex-col gap-1 overflow-y-auto">
        {cartState.items.map((item, index) => (
          <CartItem
            key={`${item.title}_${index}`}
            index={index + 1}
            imageSrc={item.image}
            alt={item.title}
            title={item.title}
            size="M"
            productId={item.id}
            price={item.price.toString()}
            count={item.count}
          />
        ))}
      </div>
      <div className="flex flex-col w-full gap-4 px-2 py-4">
        <CouponInput />
        <SummaryBox />
        <Link href="/payment?step=1">
          <Button onClick={() => {}}>Proceed to Pay</Button>
        </Link>
      </div>
    </aside>
  );
};
