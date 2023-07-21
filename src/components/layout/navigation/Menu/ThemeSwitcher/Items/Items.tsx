import { FC } from "react";

import Item from "./Item";

import { IImg } from "@/components/base/Img/img.interface";
import { IHandleSwitchTheme } from "../ThemeSwitcher";

interface ItemsProps {
  themes: IImg[];
  currentTheme: string;
  onSwitchTheme: IHandleSwitchTheme;
}

const Items: FC<ItemsProps> = ({ themes, currentTheme, onSwitchTheme }) => {
  return themes.map((theme) => {
    const { alt } = theme;
    const isChecked = currentTheme === alt;

    return (
      <Item
        key={alt}
        theme={theme}
        isChecked={isChecked}
        onSwitchTheme={onSwitchTheme}
      />
    );
  });
};

export default Items;
