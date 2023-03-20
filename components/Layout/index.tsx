import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row w-full h-full justify-between bg-gray-200">
        <Sidebar />
        <main className="flex p-4 bg-secondary text-black w-full h-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
