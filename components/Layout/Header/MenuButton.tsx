import { CloseIcon, MenuIcon } from "@/components/Icons";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";

export const MenuButton = () => {
  const { openSidebar, setOpenSidebar } = useContext(MenuContext);
  return openSidebar ? (
    <button
      className="flex bg-transparent outline-none md:hidden"
      onClick={() => setOpenSidebar(false)}
    >
      <CloseIcon />
    </button>
  ) : (
    <button
      className="flex bg-transparent outline-none md:hidden"
      onClick={() => setOpenSidebar(true)}
    >
      <MenuIcon />
    </button>
  );
};
