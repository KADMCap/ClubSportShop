import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface cartItem {
  readonly productId: string;
  readonly price: number;
  readonly title: string;
  readonly image: string;
  readonly size: string;
  readonly count: number;
}

interface OrderData {
  orderId: string;
  date: string;
}

type cartInitialState = {
  items: cartItem[];
  orderData: OrderData;
};

const initialState: cartInitialState = {
  items: [],
  orderData: {
    orderId: "",
    date: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<cartItem>) => {
      const existingItem = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingItem].count++;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<cartItem["productId"]>
    ) => {
      const existingItem = state.items.findIndex(
        (item) => item.productId === action.payload
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.items];
        if (updatedCart[existingItem].count === 1) {
          state.items = state.items.filter(
            (item) => item.productId !== action.payload
          );
        }
        updatedCart[existingItem].count--;
      }
    },
    addCountToItem: (state, action: PayloadAction<cartItem["productId"]>) => {
      const existingItem = state.items.findIndex(
        (item) => item.productId === action.payload
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingItem].count++;
      }
    },
    createOrderData: (state, action: PayloadAction<OrderData>) => {
      state.orderData = action.payload;
    },
    cleanCart: (state) => {
      state.items = [];
      state.orderData = {
        orderId: "",
        date: "",
      };
    },
  },
});

export const {
  addItemToCart,
  addCountToItem,
  removeItemFromCart,
  createOrderData,
  cleanCart,
} = cartSlice.actions;

export const cartItems = (state: RootState) => state.cart.items;
export const orderData = (state: RootState) => state.cart.orderData;

export default cartSlice.reducer;
