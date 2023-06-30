import { FC, useState, useEffect } from "react";

import { useThemeSwitch } from "./useThemeSwitch";

import { Theme } from "./theme.enum";

interface IThemeSwitcher {
  onClick: () => void;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ onClick }) => {
  const [switcherValue, setSwitcherValue] = useState("");
  const { theme, setTheme } = useThemeSwitch();
  const isDarkTheme = theme === Theme.Dark;

  // Handle set theme
  interface IHandleSetTheme {
    (): void;
  }
  const handleSetTheme: IHandleSetTheme = () => {
    if (isDarkTheme) {
      setTheme(Theme.Light);
    } else {
      setTheme(Theme.Dark);
    }
    onClick();
  };

  useEffect(() => {
    if (isDarkTheme) {
      setSwitcherValue("Switch on light theme");
    } else {
      setSwitcherValue("Switch on dark theme");
    }
  }, [theme]);

  return (
    <div className="menu__theme-switcher">
      <button onClick={handleSetTheme}>{switcherValue}</button>
    </div>
  );
};

export default ThemeSwitcher;
