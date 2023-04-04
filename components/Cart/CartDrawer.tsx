import { HeaderContext } from "@/context/HeaderContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { CouponInput } from "./CouponInput";
import { SummaryBox } from "./SummaryBox";
import { Button } from "../Buttons/Button";
import { CartContext } from "@/context/CartContext";
import { useCartState } from "@/hooks/useCartState";

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
            imageSrc="https://naszsklep-api.vercel.app/images/71YXzeOuslL._AC_UY879_.jpg"
            alt="image"
            name={item.title}
            size="M"
            productId="1"
            price={item.price.toString()}
            count={item.count}
          />
        ))}
        {/* <CartItem
          index={1}
          imageSrc="https://naszsklep-api.vercel.app/images/71YXzeOuslL._AC_UY879_.jpg"
          alt="image"
          name="Super Kit"
          size="M"
          productId="1"
          price="75.00"
        />
        <CartItem
          index={20}
          imageSrc="https://naszsklep-api.vercel.app/images/71YXzeOuslL._AC_UY879_.jpg"
          alt="image"
          name="Atletico Short"
          size="M"
          productId="1"
          price="55.00"
        /> */}
      </div>
      <div className="flex flex-col w-full gap-4 px-2 py-4">
        <CouponInput />
        <SummaryBox />
        <Button onClick={() => {}}>Proceed to Pay</Button>
      </div>
    </aside>
  );
};
