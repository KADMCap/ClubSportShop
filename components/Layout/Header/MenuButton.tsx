import { CloseIcon, MenuIcon } from "@/components/Icons";
import { HeaderContext } from "@/context/HeaderContext";
import React, { useContext } from "react";

export const MenuButton = () => {
  const { openSidebar, setOpenSidebar } = useContext(HeaderContext);
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
