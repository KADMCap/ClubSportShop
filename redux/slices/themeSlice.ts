import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Theme = "light" | "dark";

type themeState = {
  theme: Theme;
};

const initialState: themeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectedTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
