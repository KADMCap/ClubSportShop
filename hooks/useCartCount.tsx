import { cartItems } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";

export const useCartCount = () => {
  const cart = useAppSelector(cartItems);
  const cartCount = cart.reduce((acc: any, item: any) => item.count + acc, 0);
  const totalPrice = cart.reduce(
    (acc: any, item: any) => item.price * item.count + acc,
    0
  );
  if (!cart) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return { cartCount, totalPrice };
};
