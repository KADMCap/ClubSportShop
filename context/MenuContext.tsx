import React, { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const MenuContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => null,
});

export const MenuProvider: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
