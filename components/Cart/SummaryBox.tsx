import { useCartCount } from "@/hooks/useCartCount";

export const SummaryBox = () => {
  const { totalPrice } = useCartCount();

  const discout = 0;

  return (
    <div>
      <p className="pb-2 font-semibold dark:text-white">SUMMARY</p>
      <div className="w-full p-2 rounded-lg bg-secondaryLight dark:bg-secondaryDark dark:text-white">
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Price</span>$
          {totalPrice.toFixed(2)}
        </p>
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Discount</span>
          -${discout.toFixed(2)}
        </p>
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Total Pay</span>
          <span className="text-md">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};
