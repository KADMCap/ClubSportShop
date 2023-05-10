import { cartItems } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";
import { LinkButton } from "../Buttons/Button";
import { CartItem } from "./CartItem";
import { CouponInput } from "./CouponInput";
import { SummaryBox } from "./SummaryBox";
import { cartIsOpen } from "@/redux/slices/headerSlice";

export const CartDrawer = () => {
  // const { openCart } = useContext(HeaderContext);
  const openCart = useAppSelector(cartIsOpen);
  const cart = useAppSelector(cartItems);

  return (
    <aside
      className={`absolute bg-primary justify-between flex flex-col py-4 px-2 w-full h-[calc(100vh_-_64px)] t-12 right-0 transition-transform duration-300 md:absolute md:w-[400px] divide-y divide-primaryBlue translate-x-0 bg-primaryLight dark:bg-primaryDark ${
        !openCart && "hidden"
      } `}
    >
      <div className="flex flex-col gap-1 overflow-y-auto">
        {cart.map((item: any, index: number) => (
          <CartItem
            key={`${item.productId}`}
            index={index + 1}
            imageSrc={item.image}
            alt={item.title}
            title={item.title}
            size={item.size}
            productId={item.productId}
            price={item.price.toString()}
            count={item.count}
          />
        ))}
      </div>
      <div className="flex flex-col w-full gap-4 px-2 py-4">
        <CouponInput />
        <SummaryBox />
        <LinkButton href="/payment?step=1" onClick={() => {}} full>
          <p className="text-center">Proceed to Pay</p>
        </LinkButton>
      </div>
    </aside>
  );
};
