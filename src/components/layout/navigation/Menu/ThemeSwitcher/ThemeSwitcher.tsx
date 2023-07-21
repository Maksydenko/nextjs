import { FC } from "react";

import { useThemeSwitch } from "./useThemeSwitch";

import Items from "./Items/Items";

import { themes } from "./themes.const";

import { ITheme } from "./theme.interface";

interface IThemeSwitcher {
  onClick: () => void;
}

export interface IHandleSwitchTheme {
  (newTheme: ITheme["label"]): void;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ onClick }) => {
  const { theme, setTheme } = useThemeSwitch();

  const handleSwitchTheme: IHandleSwitchTheme = (newTheme) => {
    setTheme(newTheme);
    onClick();
  };

  return (
    <div className="menu__theme-switcher theme-switcher">
      <Items
        themes={themes}
        currentTheme={theme}
        onSwitchTheme={handleSwitchTheme}
      />
      <span className="theme-switcher__slider"></span>
    </div>
  );
};

export default ThemeSwitcher;
