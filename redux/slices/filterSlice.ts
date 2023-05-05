import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../store";

type filterState = {
  sport: string[];
  priceValue: number[];
  category: string[];
};

const initialState: filterState = {
  sport: ["Football", "Basketball", "Volleyball", "Tennis", "Running"],
  priceValue: [0, 1000],
  category: ["Shirts", "Shorts", "Shoes", "Other"],
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

export const selectedSports = (state: RootState) => state.filter.sport;
export const selectedCategory = (state: RootState) => state.filter.category;

export default filterSlice.reducer;
