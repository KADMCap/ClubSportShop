import { selectedSports, setSport } from "@/redux/slices/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const SportBoxItem = ({ title, icon }: Props) => {
  const sport = useAppSelector(selectedSports);
  const dispatch = useAppDispatch();

  const selectSport = () => {
    if (sport.length === 1 && sport[0] === title) {
      dispatch(
        setSport(["Football", "Basketball", "Volleyball", "Tennis", "Running"])
      );
    } else {
      dispatch(setSport([title]));
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
