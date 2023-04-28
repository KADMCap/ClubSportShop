import { FilterContext } from "@/context/FilterContext";
import React, { useContext } from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const SportBoxItem = ({ title, icon }: Props) => {
  const { sport, setSport } = useContext(FilterContext);

  const selectSport = () => {
    // click double on the same category can active and inactive this category (if close inactive then all categories will show up in products)
    if (sport.length === 1 && sport[0] === title) {
      setSport(["Football", "Basketball", "Volleyball", "Tennis", "Running"]);
    } else {
      setSport([title]);
    }
  };
  return (
    <button
      className={`flex flex-col items-center justify-between gap-2 py-2 rounded-md w-[72px] bg-primaryLight dark:bg-primaryDark ${
        sport[0] === title &&
        sport.length === 1 &&
        "ring-2 ring-primaryBlue outline-none"
      }`}
      onClick={selectSport}
    >
      {icon}
      <p className="text-sm">{title}</p>
    </button>
  );
};
