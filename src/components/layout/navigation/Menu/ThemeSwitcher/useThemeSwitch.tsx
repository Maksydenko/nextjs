import { useState, useEffect } from "react";

import { isBrowser } from "@/constants/isBrowser.const";

import { TypeSetState } from "@/types/setState.type";

interface IUseSwitchTheme {
  (): {
    theme: string;
    setTheme: TypeSetState<string>;
  };
}

export const useThemeSwitch: IUseSwitchTheme = () => {
  const prefersDark = "(prefers-color-scheme: dark)";

  const isDarkTheme = isBrowser && window.matchMedia(prefersDark).matches;
  const systemTheme = isDarkTheme ? "dark" : "light";

  const storageTheme = isBrowser ? localStorage.getItem("theme") : null;

  // Set the theme from local storage, the system theme, or the default
  const [theme, setTheme] = useState(storageTheme || "system");

  // Handle update system theme
  interface IHandleUpdateSystemTheme {
    (e: MediaQueryListEvent): void;
  }
  const handleUpdateSystemTheme: IHandleUpdateSystemTheme = (e) => {
    const { matches } = e;
    setTheme(matches ? "dark" : "light");
  };

  useEffect(() => {
    const { documentElement } = document;

    if (theme === "system") {
      localStorage.removeItem("theme");
      documentElement.setAttribute("data-theme", systemTheme);

      const systemThemeQuery = window.matchMedia(prefersDark);
      systemThemeQuery.addEventListener("change", handleUpdateSystemTheme);

      return () => {
        systemThemeQuery.removeEventListener("change", handleUpdateSystemTheme);
      };
    } else {
      localStorage.setItem("theme", theme);
      documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, systemTheme]);

  return {
    theme,
    setTheme,
  };
};
