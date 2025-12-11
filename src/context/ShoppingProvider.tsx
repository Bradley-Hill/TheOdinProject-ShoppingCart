import { createContext, useContext, useMemo, useState } from "react";
import type { ShoppingContextValue } from "../types/ShoppingContextValue";
import type { CartItem } from "../types/CartItem";
import { fetchSetCards } from "../services/fetchSetCards";
import type { MagicCard } from "../types/MagicCard";

export const useShoppingContext = () => {
    const context = useContext(ShoppingContext);
    if (!context) {
        throw new Error("useShoppingContext must be used within a ShoppingProvider");
    }
    return context;
};

export const ShoppingContext = createContext<ShoppingContextValue | undefined>(
  undefined
);
function ShoppingProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sets, setSets] = useState<{ [setCode: string]: MagicCard[] }>({});
  const [currentSet, setCurrentSet] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addToCart = (
    scryfall_id: string,
    quantity: number,
    price_eur: number
  ) => {
    setCart((cart) => {
      const existingItem = cart.find(
        (item) => item.scryfall_id === scryfall_id
      );
      if (existingItem) {
        return cart.map((item) =>
          item.scryfall_id === scryfall_id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...cart, { scryfall_id, quantity, price_eur }];
      }
    });
  };
  const removeFromCart = (scryfall_id: string) => {
    setCart((cart) => cart.filter((item) => item.scryfall_id !== scryfall_id));
  };
  const clearCart = () => {
    setCart([]);
  };
  const selectSet = async (setCode: string) => {
    if (!sets[setCode]) {
      setLoading(true);
      setError(null);
      try {
        const cardsFromAPI: MagicCard[] = await fetchSetCards(setCode);
        setSets((prevSets) => ({ ...prevSets, [setCode]: cardsFromAPI }));
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }
    setCurrentSet(setCode);
  }

  const value: ShoppingContextValue = useMemo(
    () => ({
      cart,
      sets,
      currentSet,
      loading,
      error,
      addToCart,
      removeFromCart,
      clearCart,
      selectSet,
    }),
    [cart, sets, currentSet, loading, error]
  );
  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingProvider;
