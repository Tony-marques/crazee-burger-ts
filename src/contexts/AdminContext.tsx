import { ReactNode, createContext, useContext, useState } from "react";

type AdminContextProviderProps = {
  children: ReactNode;
};

type AdminContextType = {
  selectedTab: string;
  handleChangeSelectedTab: (newValue: string) => void;
  isCollapse: boolean;
  handleChangeIsCollapse: () => void;
  isAdmin: boolean;
  handleChangeIsAdmin: () => void;
};

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminContextProvider = ({
  children,
}: AdminContextProviderProps) => {
  const [selectedTab, setSelectedTab] = useState("add");
  const [isCollapse, setIsCollapse] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChangeSelectedTab = (newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleChangeIsCollapse = () => {
    setIsCollapse((prev) => !prev);
  };

  const handleChangeIsAdmin = () => {
    setIsAdmin((prev) => !prev);
  };

  // useEffect(() => {
  //   setIsCollapse(false);
  // }, [isAdmin]);

  const AdminContextValue: AdminContextType = {
    selectedTab,
    handleChangeSelectedTab,
    isCollapse,
    handleChangeIsCollapse,
    isAdmin,
    handleChangeIsAdmin,
  };

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
