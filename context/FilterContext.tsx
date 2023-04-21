import React, { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const FilterContext = createContext<{
  sport: string;
  setSport: React.Dispatch<React.SetStateAction<string>>;
  priceValue: number[];
  setPriceValue: React.Dispatch<React.SetStateAction<number[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}>({
  sport: "",
  setSport: () => null,
  priceValue: [],
  setPriceValue: () => null,
  category: "",
  setCategory: () => null,
});

export const FilterProvider: FC<Props> = ({ children }) => {
  const [sport, setSport] = useState("");
  const [priceValue, setPriceValue] = useState([0, 1000]);
  const [category, setCategory] = useState("");

  const value = {
    sport,
    setSport,
    priceValue,
    setPriceValue,
    category,
    setCategory,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
