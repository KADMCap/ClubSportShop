import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";
import headerSlice from "./slices/headerSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    theme: themeReducer,
    cart: cartReducer,
    header: headerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
