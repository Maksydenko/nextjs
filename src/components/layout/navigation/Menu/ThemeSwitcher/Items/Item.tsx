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

  // const styleLabel = {
  //   cursor: isChecked ? "default" : "pointer",
  // };

  const img: IImg = {
    src,
    alt,
  };

  return (
    <>
      <input
        type="radio"
        id={`${alt}-theme`}
        className="theme-switcher__input"
        checked={isChecked}
        onChange={handleClick}
      />
      <label
        htmlFor={`${alt}-theme`}
        className={clsx(
          "theme-switcher__label",
          isChecked && "theme-switcher__label_checked"
        )}
        // style={styleLabel}
      >
        <Img className="theme-switcher__img" img={img} resetStyle />
      </label>
    </>
  );
};

export default Item;
