import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ProductContainerScroll = ({ children }: Props) => {
  return (
    <div className="flex flex-row gap-2 overflow-x-scroll min-h-[320px] scrollbar-thin scrollbar-track-white scrollbar-thumb-primaryBlue dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue">
      {children}
    </div>
  );
};
