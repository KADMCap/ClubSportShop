import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <div className="flex flex-row justify-between w-full h-full">
        <Sidebar />
        <main className="flex w-full p-4 text-black h-[calc(100vh_-_64px)] bg-secondaryLight overflow-auto dark:text-white dark:bg-secondaryDark">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
