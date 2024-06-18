import { ReactNode, createContext, useContext, useState } from "react";

type AdminContextProviderProps = {
  children: ReactNode;
};

type AdminContextType = {
  selectedTab: string;
  handleChangeSelectedTab: (newValue: string) => void;
};

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminContextProvider = ({
  children,
}: AdminContextProviderProps) => {
  const [selectedTab, setSelectedTab] = useState("ajouter");

  const handleChangeSelectedTab = (newValue: string) => {
    setSelectedTab(newValue);
  };

  const AdminContextValue = { selectedTab, handleChangeSelectedTab };

  return (
    <AdminContext.Provider value={AdminContextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (!context)
    throw new Error("useAdminContext must be used in AdminContextProvider");

  return context;
};
