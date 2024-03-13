import { FC } from "react";

import Items from "./Items/Items";

import { themes } from "./themes.const";

interface IThemeSwitcher {}

const ThemeSwitcher: FC<IThemeSwitcher> = () => {
  return (
    <div className="menu__theme-switcher theme-switcher">
      <Items themes={themes} />
      <span className="theme-switcher__slider"></span>
    </div>
  );
};

export default ThemeSwitcher;
