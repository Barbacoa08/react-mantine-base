import { createContext, useContext } from "react";
import type { GroceryItem } from "./Checkout";

interface GroceriesContextType {
  groceries: GroceryItem[];
}

export const GroceriesContext = createContext<GroceriesContextType>({
  groceries: [],
});

export const useGroceriesContext = () => {
  const context = useContext(GroceriesContext);

  if (context === undefined) {
    throw new Error("useGroceriesContext must be used within a GroceriesContextProvider");
  }

  return context;
};
