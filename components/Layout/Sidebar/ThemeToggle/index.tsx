import { MoonIcon, SunIcon } from "@/components/Icons";
import { selectedTheme, setTheme } from "@/redux/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export const ThemeToggle = () => {
  // const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectedTheme);

  return (
    <div className="flex flex-row items-center justify-center w-full text-black rounded-lg bg-secondaryLight dark:text-white dark:bg-secondaryDark">
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
          theme === "light" && "bg-white "
        }`}
        onClick={() => dispatch(setTheme("light"))}
      >
        <SunIcon />
        Light
      </button>
      <button
        type="button"
        className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md  ${
          theme === "dark" && "bg-primaryDark"
        }`}
        onClick={() => dispatch(setTheme("dark"))}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
};
