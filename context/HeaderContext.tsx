import React, { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const HeaderContext = createContext<{
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openNotification: boolean;
  setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  openSidebar: false,
  setOpenSidebar: () => null,
  openNotification: false,
  setOpenNotification: () => null,
});

export const HeaderProvider: FC<Props> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const value = {
    openSidebar,
    setOpenSidebar,
    openNotification,
    setOpenNotification,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
