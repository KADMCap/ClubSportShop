import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export const useCartState = () => {
  const cartState = useContext(CartContext);

  if (!cartState) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return cartState;
};
