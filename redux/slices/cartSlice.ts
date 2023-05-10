import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly image: string;
  readonly size: string;
  readonly count: number;
}

type cartInitialState = {
  items: CartItem[];
};

const initialState: cartInitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingItem].count++;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeItemFromCart: (state, action: PayloadAction<CartItem["id"]>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.items];
        if (updatedCart[existingItem].count === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
        updatedCart[existingItem].count--;
      }
    },
    addCountToItem: (state, action: PayloadAction<CartItem["id"]>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingItem].count++;
      }
    },
  },
});

export const { addItemToCart, addCountToItem, removeItemFromCart } =
  cartSlice.actions;

export const cartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
