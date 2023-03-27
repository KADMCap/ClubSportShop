import { CloseIcon, MenuIcon } from "@/components/Icons";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";

export const MenuButton = () => {
  const { open, setOpen } = useContext(MenuContext);
  return open ? (
    <button
      className="flex bg-transparent outline-none md:hidden"
      onClick={() => setOpen(false)}
    >
      <CloseIcon />
    </button>
  ) : (
    <button
      className="flex bg-transparent outline-none md:hidden"
      onClick={() => setOpen(true)}
    >
      <MenuIcon />
    </button>
  );
};
