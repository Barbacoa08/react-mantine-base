import { createContext, useContext } from "react";

export interface GlobalContextType {
  name: string;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
  initialValue?: GlobalContextType;
}

export const GlobalContext = createContext<GlobalContextType>({ name: "" });

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
  initialValue = { name: "" },
}) => {
  return <GlobalContext.Provider value={initialValue}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};
