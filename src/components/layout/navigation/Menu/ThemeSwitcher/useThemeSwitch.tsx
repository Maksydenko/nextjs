import { Dispatch, SetStateAction, useState, useEffect } from "react";

import { isBrowser } from "@/constants/isBrowser.const";
import { Theme } from "./theme.enum";

interface IUseSwitchTheme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const useThemeSwitch = (): IUseSwitchTheme => {
  const isDarkTheme =
    isBrowser && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = isDarkTheme ? Theme.Dark : Theme.Light;
  const storageTheme = isBrowser && localStorage.getItem("theme");
  // Set the theme from local storage or the default
  const [theme, setTheme] = useState(storageTheme || defaultTheme);

  useEffect(() => {
    const { documentElement } = document;
    documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
