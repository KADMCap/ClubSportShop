import React, { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const FilterContext = createContext<{
  sport: string;
  setSport: React.Dispatch<React.SetStateAction<string>>;
}>({
  sport: "",
  setSport: () => null,
});

export const FilterProvider: FC<Props> = ({ children }) => {
  const [sport, setSport] = useState("");

  const value = {
    sport,
    setSport,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
