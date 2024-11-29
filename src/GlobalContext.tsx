import { createContext } from "react";

export interface GlobalContextType {
  name: string;
}

export const GlobalContext = createContext<GlobalContextType>({ name: "" });
