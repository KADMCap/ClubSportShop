import React, { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const MenuContext = createContext<{
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

export const MenuProvider: FC<Props> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const value = {
    openSidebar,
    setOpenSidebar,
    openNotification,
    setOpenNotification,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
