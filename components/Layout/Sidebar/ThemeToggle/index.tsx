import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "@/components/Icons";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-row items-center justify-center w-full text-black rounded-lg bg-secondaryLight dark:text-white dark:bg-secondaryDark">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
          theme === "light" && "bg-white "
        }`}
        onClick={() => setTheme("light")}
      >
        <SunIcon />
        Light
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md  ${
          theme === "dark" && "bg-primaryDark"
        }`}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
};
