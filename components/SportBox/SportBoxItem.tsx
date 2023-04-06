import React, { useState } from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export const SportBoxItem = ({ title, icon }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={`flex flex-col items-center justify-between gap-2 py-2 rounded-md w-[72px] bg-primaryLight dark:bg-primaryDark ${
        isActive && "ring-2 ring-primaryBlue outline-none"
      }`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      {icon}
      <p className="text-sm">{title}</p>
    </button>
  );
};
