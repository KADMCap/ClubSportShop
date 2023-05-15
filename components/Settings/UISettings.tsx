import React from "react";
import { ThemeToggle } from "../Layout/Sidebar/ThemeToggle";

export const UISettings = () => {
  return (
    <div className="flex flex-col justify-start w-full gap-2">
      <p className="font-semibold">UI Settings</p>
      <div className="flex flex-row items-center">
        <label className="block pr-2 dark:text-white">Theme:</label>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <label className="block pr-2 dark:text-white">Language:</label>
        <div className="flex flex-col items-center py-1 border rounded-md border-primaryBlue">
          <select
            className="flex flex-row items-center justify-center font-semibold outline-none dark:bg-primaryDark"
            onChange={(e) => e.target.value}
          >
            <option value="polski">Polski</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};
