import { cartItems } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";

export const SummaryBox = () => {
  const cartState = useAppSelector(cartItems);

  const price = cartState.reduce((acc, item) => {
    acc += item.price * item.count;
    return acc;
  }, 0);

  const discout = 0; // to change coupon code value
  const totalPay = price - discout;

  return (
    <div>
      <p className="pb-2 font-semibold dark:text-white">SUMMARY</p>
      <div className="w-full p-2 rounded-lg bg-secondaryLight dark:bg-secondaryDark dark:text-white">
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Price</span>$
          {price.toFixed(2)}
        </p>
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Discount</span>
          -${discout.toFixed(2)}
        </p>
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Total Pay</span>
          <span className="text-md">${totalPay.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};
