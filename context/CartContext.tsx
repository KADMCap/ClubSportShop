import { createContext, useState, ReactNode } from "react";

interface CartItem {
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
}

export const CartContext = createContext<CartState | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      price: 95.0,
      title: "Shirt Kit",
    },
  ]);

  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
