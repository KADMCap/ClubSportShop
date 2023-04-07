import React, { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const FilterContext = createContext<{
  sport: string;
  setSport: React.Dispatch<React.SetStateAction<string>>;
  priceValue: number[];
  setPriceValue: React.Dispatch<React.SetStateAction<number[]>>;
}>({
  sport: "",
  setSport: () => null,
  priceValue: [],
  setPriceValue: () => null,
});

export const FilterProvider: FC<Props> = ({ children }) => {
  const [sport, setSport] = useState("");
  const [priceValue, setPriceValue] = useState([0, 1000]);

  const value = {
    sport,
    setSport,
    priceValue,
    setPriceValue,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
