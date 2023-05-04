import { FilterContext } from "@/context/FilterContext";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSport } from "@/redux/slices/filterSlice";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const SportBoxItem = ({ title, icon }: Props) => {
  // const { sport, setSport } = useContext(FilterContext);
  const [chosenSport, setChosenSport] = useState<string[]>([
    "Football",
    "Basketball",
    "Volleyball",
    "Tennis",
    "Running",
  ]);
  // const chosenSport = useSelector();
  const dispatch = useDispatch();

  const selectSport = () => {
    if (chosenSport.length === 1 && chosenSport[0] === title) {
      dispatch(
        setSport(["Football", "Basketball", "Volleyball", "Tennis", "Running"])
      );
    } else {
      setChosenSport([title]);
      dispatch(setSport([title]));
      // setChosenSport();
    }
  };

  // const selectSport = () => {
  //   // click double on the same category can active and inactive this category (if close inactive then all categories will show up in products)
  //   if (sport.length === 1 && sport[0] === title) {
  //     setSport(["Football", "Basketball", "Volleyball", "Tennis", "Running"]);
  //   } else {
  //     setSport([title]);
  //   }
  // };
  return (
    <button
      className={`flex flex-col items-center justify-between gap-2 py-2 rounded-md w-[72px] bg-primaryLight dark:bg-primaryDark ${
        chosenSport[0] === title &&
        chosenSport.length === 1 &&
        "ring-2 ring-primaryBlue outline-none"
      }`}
      onClick={selectSport}
    >
      {icon}
      <p className="text-sm">{title}</p>
    </button>
  );
};
