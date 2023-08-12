import { FC } from "react";

import { useThemeSwitch } from "./useThemeSwitch";

import Items from "./Items/Items";

import { themes } from "./themes.const";

import { IImg } from "@/components/base/Img/img.interface";

interface IThemeSwitcher {
  onClick: () => void;
}

export interface IHandleSwitchTheme {
  (newTheme: IImg["alt"]): void;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ onClick }) => {
  const { theme, setTheme } = useThemeSwitch();

  const handleSwitchTheme: IHandleSwitchTheme = (newTheme) => {
    onClick();
    setTheme(newTheme);
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
