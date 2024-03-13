import { FC } from "react";

import Item from "./Item";

import { ITheme } from "../theme.interface";
import { IHandleSwitchTheme } from "../ThemeSwitcher";

interface ItemsProps {
  themes: ITheme[];
  currentTheme: string;
  onSwitchTheme: IHandleSwitchTheme;
}

const Items: FC<ItemsProps> = ({ themes, currentTheme, onSwitchTheme }) => {
  return themes.map((theme) => {
    const { label } = theme;
    const isChecked = currentTheme === label;

    return (
      <Item
        key={label}
        theme={theme}
        isChecked={isChecked}
        onSwitchTheme={onSwitchTheme}
      />
    );
  });
};

export default Items;