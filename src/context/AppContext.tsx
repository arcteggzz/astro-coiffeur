import React, { createContext, useEffect, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileNavbarOpen: boolean;
  setMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileNavbar: () => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarOpen((mobileNavbarOpen) => !mobileNavbarOpen);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      "#e7e7e7"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        mobileNavbarOpen,
        setMobileNavbarOpen,
        toggleMobileNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
