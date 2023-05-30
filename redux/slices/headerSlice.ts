import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type headerState = {
  openSidebar: boolean;
  openNotification: boolean;
  openCart: boolean;
  openFavoriteModal: boolean;
  openSearchBar: boolean;
};

const initialState: headerState = {
  openSidebar: true,
  openNotification: false,
  openCart: false,
  openFavoriteModal: false,
  openSearchBar: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setOpenCart: (state, action: PayloadAction<string | undefined>) => {
      state.openCart = !state.openCart;
    },
    setOpenSidebar: (state, action: PayloadAction<string | undefined>) => {
      state.openSidebar = !state.openSidebar;
    },
    setOpenNotification: (state, action: PayloadAction<boolean>) => {
      state.openNotification = action.payload;
    },
    setOpenFavoriteModal: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.openFavoriteModal = !state.openFavoriteModal;
    },
    setOpenSearchBar: (state, action: PayloadAction<string | undefined>) => {
      state.openSearchBar = !state.openSearchBar;
    },
  },
});

export const {
  setOpenCart,
  setOpenFavoriteModal,
  setOpenNotification,
  setOpenSidebar,
  setOpenSearchBar,
} = headerSlice.actions;

export const sidebarIsOpen = (state: RootState) => state.header.openSidebar;
export const cartIsOpen = (state: RootState) => state.header.openCart;
export const favoriteModalIsOpen = (state: RootState) =>
  state.header.openFavoriteModal;
export const notificationIsOpen = (state: RootState) =>
  state.header.openNotification;
export const searchBarIsOpen = (state: RootState) => state.header.openSearchBar;

export default headerSlice.reducer;
