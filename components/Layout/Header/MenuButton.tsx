import { CloseIcon, MenuIcon } from "@/components/Icons";
import { HeaderContext } from "@/context/HeaderContext";
import { sidebarIsOpen, setOpenSidebar } from "@/redux/slices/headerSlice";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import React, { useContext } from "react";

export const MenuButton = () => {
  const openSidebar = useAppSelector(sidebarIsOpen);
  const dispatch = useAppDispatch();

  const handleToggleSidebarClick = () => {
    dispatch(setOpenSidebar());
  };
  return (
    <button
      className="flex bg-transparent outline-none md:hidden"
      onClick={handleToggleSidebarClick}
    >
      {openSidebar ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};
