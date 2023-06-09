import React from "react";
import { NotificationPopup } from "../Modals/NotificationPopup";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { CartDrawer } from "../Cart/CartDrawer";
import { FavoriteModal } from "../Modals/FavoriteModal";
import { useAppSelector } from "@/redux/store";
import { selectedTheme } from "@/redux/slices/themeSlice";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const theme = useAppSelector(selectedTheme);
  return (
    <div className={`flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <NotificationPopup />
      <FavoriteModal />
      <div className="flex flex-row justify-between w-full h-full">
        <Sidebar />
        <main className="flex w-full p-4 text-black h-[calc(100vh_-_64px)] scrollbar-thin scrollbar-track-white scrollbar-thumb-primaryBlue bg-secondaryLight dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue overflow-auto dark:text-white dark:bg-secondaryDark">
          {children}
        </main>
        <CartDrawer />
      </div>
      <Footer />
    </div>
  );
};
