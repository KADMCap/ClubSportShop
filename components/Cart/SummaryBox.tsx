import React from "react";

export const SummaryBox = () => {
  return (
    <div>
      <p className="pb-2 font-semibold dark:text-white">SUMMARY</p>
      <div className="w-full p-2 rounded-lg bg-secondaryLight dark:bg-secondaryDark dark:text-white">
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Price</span>
          $193.00
        </p>
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Discount</span>
          -$19.00
        </p>
        <p className="flex flex-row items-center justify-between font-semibold">
          <span className="text-sm text-primaryGray">Total Pay</span>
          <span className="text-md">$174.00</span>
        </p>
      </div>
    </div>
  );
};
