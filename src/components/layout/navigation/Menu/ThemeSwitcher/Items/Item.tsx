import { FC } from "react";

import { ITheme } from "../theme.interface";
import { IHandleSwitchTheme } from "../ThemeSwitcher";
import Img from "@/components/base/Img/Img";
import { IImg } from "@/components/base/Img/img.interface";

interface ItemProps {
  theme: ITheme;
  isChecked: boolean;
  onSwitchTheme: IHandleSwitchTheme;
}

const Item: FC<ItemProps> = ({
  theme: { label, icon },
  isChecked,
  onSwitchTheme,
}) => {
  const handleClick = () => {
    onSwitchTheme(label);
  };

  const styleLabel = {
    cursor: isChecked ? "default" : "pointer",
  };

  const img: IImg = {
    src: icon,
    alt: label,
  };

  return (
    <>
      <input
        type="radio"
        id={`${label}-theme`}
        className="theme-switcher__input"
        name="theme"
        checked={isChecked}
        onChange={handleClick}
      />
      <label
        htmlFor={`${label}-theme`}
        className="theme-switcher__label"
        style={styleLabel}
      >
        <Img className="theme-switcher" img={img} resetStyle />
      </label>
    </>
  );
};

export default Item;
