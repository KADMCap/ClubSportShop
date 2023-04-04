import { createContext, useState, ReactNode } from "react";

interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
}

export const CartContext = createContext<CartState | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prev) => {
            const existingItem = prev.find(
              (prevItem) => prevItem.id === item.id
            );
            if (!existingItem) {
              return [...prev, item];
            }
            return prev.map((prevItem) => {
              if (prevItem.id === item.id) {
                return {
                  ...prevItem,
                  count: prevItem.count + 1,
                };
              }
              return prevItem;
            });
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((prev) => {
            const existingItem = prev.find((prevItem) => prevItem.id === id);
            if (existingItem && existingItem.count <= 1) {
              return prev.filter((prevItem) => prevItem.id !== id);
            }
            return prev.map((prevItem) => {
              if (prevItem.id === id) {
                return {
                  ...prevItem,
                  count: prevItem.count - 1,
                };
              }
              return prevItem;
            });
          });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
