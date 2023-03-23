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
      <div className="flex flex-row justify-between w-full h-full bg-gray-200">
        <Sidebar />
        <main className="flex w-full h-full p-4 text-black bg-secondaryLight">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
