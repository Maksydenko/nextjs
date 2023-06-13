import { FC, useState, useEffect } from "react";

import { useThemeSwitch } from "./useThemeSwitch";

import { Theme } from "./theme.enum";

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useThemeSwitch();
  const [switcherValue, setSwitcherValue] = useState("");
  const isDarkTheme = theme === Theme.Dark;

  const handleSetTheme = () => {
    if (isDarkTheme) {
      setTheme(Theme.Light);
    } else {
      setTheme(Theme.Dark);
    }
  };

  useEffect(() => {
    if (isDarkTheme) {
      setSwitcherValue("Switch on light theme");
    } else {
      setSwitcherValue("Switch on dark theme");
    }
  }, [theme]);

  return (
    <div className="header__theme-switcher">
      <button onClick={handleSetTheme}>{switcherValue}</button>
    </div>
  );
};

export default ThemeSwitcher;
