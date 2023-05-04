import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type headerState = {
  openSidebar: boolean;
  openNotification: boolean;
  openCart: boolean;
  openFavoriteModal: boolean;
};

const initialState: headerState = {
  openSidebar: true,
  openNotification: false,
  openCart: false,
  openFavoriteModal: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setOpenCart: (state, action: PayloadAction<string | undefined>) => {
      console.log("setopencart");
      state.openCart = !state.openCart;
    },
    setOpenSidebar: (state, action: PayloadAction<string | undefined>) => {
      state.openSidebar = !state.openSidebar;
    },
    setOpenNotification: (state, action: PayloadAction<string | undefined>) => {
      state.openNotification = !state.openNotification;
    },
    setOpenFavoriteModal: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.openFavoriteModal = !state.openFavoriteModal;
    },
  },
});

export const {
  setOpenCart,
  setOpenFavoriteModal,
  setOpenNotification,
  setOpenSidebar,
} = headerSlice.actions;

export const sidebarIsOpen = (state: RootState) => state.header.openSidebar;
export const cartIsOpen = (state: RootState) => state.header.openCart;
export const favoriteModalIsOpen = (state: RootState) =>
  state.header.openFavoriteModal;
export const notificationIsOpen = (state: RootState) =>
  state.header.openNotification;

export default headerSlice.reducer;
