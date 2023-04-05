import { useRouter } from "next/router";
import React from "react";

interface Props {
  step: 1 | 2 | 3 | 4;
  title: "Summary" | "Shipping" | "Payment" | "Confirm";
}

export const PaymentStepItem = ({ step, title }: Props) => {
  const router = useRouter();
  const isActive = router.query.step === step.toString();
  return (
    <div
      className={`flex flex-col justify-start w-full px-4 py-2 rounded-md md:rounded-lg ${
        isActive && "bg-primaryBlue dark:bg-darkBlue"
      } `}
    >
      <p className="text-[8px] md:text-sm text-lightGray">Step {step}</p>
      <p
        className={`font-semibold text-sm md:text-base ${
          isActive && "text-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
