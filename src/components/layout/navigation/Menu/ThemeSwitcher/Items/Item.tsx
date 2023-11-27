import { FC } from "react";
import clsx from "clsx";

import Img from "~/components/base/Img/Img";

import { ITheme } from "../theme.interface";
import { IHandleSwitchTheme } from "../ThemeSwitcher";

interface ItemProps {
  theme: ITheme;
  isChecked: boolean;
  onSwitchTheme: IHandleSwitchTheme;
}

const Item: FC<ItemProps> = ({
  theme: { icon, label },
  isChecked,
  onSwitchTheme,
}) => {
  const handleClick = () => {
    onSwitchTheme(label);
  };

  const id = `${label}-theme`;

  return (
    <>
      <input
        type="radio"
        id={id}
        className="theme-switcher__input"
        checked={isChecked}
        onChange={handleClick}
      />
      <label
        htmlFor={id}
        className={clsx(
          "theme-switcher__label",
          isChecked && "theme-switcher__label--checked"
        )}
      >
        <Img className="theme-switcher__img" src={icon} alt={label} svg />
      </label>
    </>
  );
};

export default Item;
