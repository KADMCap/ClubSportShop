import React from "react";

export const CouponInput = () => {
  return (
    <input
      type="text"
      placeholder="Coupon Code"
      className="w-full p-2 rounded-md placeholder:text-primaryGray bg-secondaryLight dark:bg-secondaryDark dark:text-white"
    />
  );
};
