import React from "react";
import { Button } from "../Buttons/Button";
import { PremiumOptionsList } from "./PremiumOptionsList";

interface Props {
  title: string;
  price: string;
  period: string;
  onClick: () => void;
  options: string[];
}

export const PremiumPlanBox = ({
  title,
  price,
  period,
  onClick,
  options,
}: Props) => {
  return (
    <div className="w-full max-w-sm p-4 rounded-lg bg-primaryLight dark:bg-primaryDark">
      <h5
        className={`mb-4 font-medium text-md
      ${title === "Plus" && "text-primaryBlue"}
      ${title === "Super" && "text-green-500"}
      `}
      >
        {title} plan
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="font-semibold text-md">$</span>
        <span className="font-bold tracking-tight text-md">{price}</span>
        <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">
          /{period}
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        {options.map((option, idx) => (
          <PremiumOptionsList key={idx} option={option} />
        ))}
      </ul>
      {title !== "Free" && (
        <Button full onClick={onClick}>
          Choose plan
        </Button>
      )}
    </div>
  );
};
