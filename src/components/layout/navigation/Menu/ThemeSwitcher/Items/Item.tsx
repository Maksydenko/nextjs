import { FC } from "react";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";

import { ITheme } from "../theme.interface";
import { TypeSetState } from "@/types/setState.type";

interface ItemProps {
  theme: ITheme;
  isChecked: boolean;
  setCurrentTheme: TypeSetState<string>;
}

const Item: FC<ItemProps> = ({
  theme: { icon, label },
  isChecked,
  setCurrentTheme,
}) => {
  const handleClick = () => {
    setCurrentTheme(label);
  };

  const id = `theme-${label}`;

  return (
    <>
      <input
        id={id}
        className="theme-switcher__input"
        type="radio"
        checked={isChecked}
        onChange={handleClick}
      />
      <label
        htmlFor={id}
        className={clsx(
          "theme-switcher__label",
          isChecked && "theme-switcher__label--checked"
        )}
        aria-label={`Set ${label} theme`}
        {...(!isChecked && {
          tabIndex: 0,
        })}
      >
        <Img className="theme-switcher__img" src={icon} alt={label} svg />
      </label>
    </>
  );
};

export default Item;
