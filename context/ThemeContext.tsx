import React, { createContext, FC, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

const themeStorage = (): Theme => {
  try {
    const serializedState = localStorage.getItem("theme");
    if (serializedState === null) {
      return "light";
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return "light";
  }
};

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({
  theme: "light",
  setTheme: () => null,
});

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const themeData: Theme = themeStorage();
    if (themeData) {
      setTheme(themeData);
    }
  }, []);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
