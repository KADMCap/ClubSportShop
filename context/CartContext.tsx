import { createContext, useState, ReactNode } from "react";

interface CartItem {
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
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
              (prevItem) => prevItem.title === item.title
            );
            if (!existingItem) {
              return [...prev, item];
            }
            return prev.map((prevItem) => {
              if (prevItem.title === item.title) {
                return {
                  ...prevItem,
                  count: prevItem.count + 1,
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
