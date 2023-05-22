import React from "react";
import { CheckIcon } from "../Icons";

export const PremiumOptionsList = ({ option }: { option: string }) => {
  return (
    <li className="flex space-x-3">
      <CheckIcon />
      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
        {option}
      </span>
    </li>
  );
};
