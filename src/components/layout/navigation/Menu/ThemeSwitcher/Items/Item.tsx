import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { IImg } from "@/components/base/Img/img.interface";
import { IHandleSwitchTheme } from "../ThemeSwitcher";
import clsx from "clsx";

interface ItemProps {
  theme: IImg;
  isChecked: boolean;
  onSwitchTheme: IHandleSwitchTheme;
}

const Item: FC<ItemProps> = ({
  theme: { src, alt },
  isChecked,
  onSwitchTheme,
}) => {
  const handleClick = () => {
    onSwitchTheme(alt);
  };

  const img: IImg = {
    src,
    alt,
  };

  const id = `${alt}-theme`;

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
        // style={styleLabel}
      >
        <Img className="theme-switcher__img" img={img} resetStyle />
      </label>
    </>
  );
};

export default Item;
