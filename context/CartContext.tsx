import { createContext, useState, ReactNode, useEffect } from "react";

interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly image: string;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
  readonly addCountToItem: (id: CartItem["id"]) => void;
}

export const CartContext = createContext<CartState | null>(null);

const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("CLUBSHOP_CART_ITEMS");
  if (!itemsFromLocalStorage) {
    return;
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (error) {
    return;
  }
};

const setCartItemsInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("CLUBSHOP_CART_ITEMS", JSON.stringify(cartItems));
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    if (cartItems === undefined) {
      return;
    }
    setCartItemsInStorage(cartItems);
  }, [cartItems]);

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
        addCountToItem: (id) => {
          setCartItems((prev) => {
            return prev.map((prevItem) => {
              if (prevItem.id === id) {
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
