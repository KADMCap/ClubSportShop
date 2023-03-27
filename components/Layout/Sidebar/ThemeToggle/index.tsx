import { MoonIcon, SunIcon } from "@/components/Icons";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

export const ThemeToggle = () => {
  const [active, setActive] = useState("Light");
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-row items-center justify-center w-full rounded-lg bg-secondaryLight">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium text-black rounded-md ${
          theme === "light" && "bg-white"
        }`}
        onClick={() => setTheme("light")}
      >
        <SunIcon />
        Light
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium text-black rounded-md  ${
          theme === "dark" && "bg-white"
        }`}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
};
