import { FilterContext } from "@/context/FilterContext";
import React, { useContext, useState } from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const SportBoxItem = ({ title, icon }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { sport, setSport } = useContext(FilterContext);
  return (
    <button
      className={`flex flex-col items-center justify-between gap-2 py-2 rounded-md w-[72px] bg-primaryLight dark:bg-primaryDark ${
        sport === title.toLowerCase() && "ring-2 ring-primaryBlue outline-none"
      }`}
      onClick={() =>
        sport === title.toLowerCase()
          ? setSport("")
          : setSport(title.toLowerCase())
      }
    >
      {icon}
      <p className="text-sm">{title}</p>
    </button>
  );
};
