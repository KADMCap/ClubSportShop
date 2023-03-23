import { MoonIcon, SunIcon } from "@/components/Icons";
import { useState } from "react";

export const ThemeToggle = () => {
  const [active, setActive] = useState("Light");
  return (
    <div className="flex flex-row items-center justify-center w-full rounded-lg bg-secondaryLight">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium text-black rounded-md ${
          active === "Light" && "bg-white"
        }`}
        onClick={() => setActive("Light")}
      >
        <SunIcon />
        Light
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium text-black rounded-md  ${
          active === "Dark" && "bg-white"
        }`}
        onClick={() => setActive("Dark")}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
};
