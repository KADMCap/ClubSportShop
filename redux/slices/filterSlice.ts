import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type filterState = {
  sport: string[];
  priceRange: number[];
  category: string[];
};

const initialState: filterState = {
  sport: ["Football", "Basketball", "Volleyball", "Tennis", "Running"],
  priceRange: [0, 1000],
  category: ["Shirts", "Shorts", "Shoes", "Other"],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSport: (state, action: PayloadAction<string[]>) => {
      state.sport = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
  },
});

export const { setSport, setPriceRange, setCategory } = filterSlice.actions;

export const selectedSports = (state: RootState) => state.filter.sport;
export const selectedCategory = (state: RootState) => state.filter.category;
export const selectedPriceRange = (state: RootState) => state.filter.priceRange;

export default filterSlice.reducer;
