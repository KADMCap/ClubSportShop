import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

type filterState = {
  sport: string[];
  setSport: React.Dispatch<React.SetStateAction<string[]>>;
  priceValue: number[];
  setPriceValue: React.Dispatch<React.SetStateAction<number[]>>;
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
};

const initialState: filterState = {
  sport: ["Football", "Basketball", "Volleyball", "Tennis", "Running"],
  setSport: () => null,
  priceValue: [0, 1000],
  setPriceValue: () => null,
  category: ["Shirts", "Shorts", "Shoes", "Other"],
  setCategory: () => null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSport: (state, action: PayloadAction<string[]>) => {
      state.sport = action.payload;
    },
    setPrice: (state, action: PayloadAction<number[]>) => {
      state.priceValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
  },
});

export const { setSport, setPrice, setCategory } = filterSlice.actions;

export default filterSlice.reducer;
