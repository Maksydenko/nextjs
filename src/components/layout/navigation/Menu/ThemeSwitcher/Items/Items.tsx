import { FC } from "react";

import { useThemeSwitch } from "../useThemeSwitch";

import Item from "./Item";

import { ITheme } from "../theme.interface";

interface ItemsProps {
  themes: ITheme[];
}

const Items: FC<ItemsProps> = ({ themes }) => {
  const { currentTheme, setCurrentTheme } = useThemeSwitch();

  return themes.map((theme) => {
    const { label } = theme;
    const isChecked = currentTheme === label;

    return (
      <Item
        key={label}
        theme={theme}
        isChecked={isChecked}
        setCurrentTheme={setCurrentTheme}
      />
    );
  });
};

export default Items;
