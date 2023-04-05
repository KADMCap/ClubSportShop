import React from "react";
import { PaymentStepItem } from "./PaymentStepItem";

export const PaymentStep = () => {
  return (
    <div className="flex flex-row items-center w-full gap-2 rounded-md md:rounded-lg bg-primaryLight dark:bg-primaryDark">
      <PaymentStepItem step={1} title="Summary" />
      <PaymentStepItem step={2} title="Shipping" />
      <PaymentStepItem step={3} title="Payment" />
      <PaymentStepItem step={4} title="Confirm" />
    </div>
  );
};
