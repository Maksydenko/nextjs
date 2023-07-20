import { FC } from "react";

import { ITheme } from "../theme.interface";
import { IHandleSwitchTheme } from "../ThemeSwitcher";

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

  return (
    <>
      <input
        type="radio"
        id={`${label}-theme`}
        name="theme"
        checked={isChecked}
        onChange={handleClick}
      />
      <label htmlFor={`${label}-theme`} style={styleLabel}>
        {icon}
      </label>
    </>
  );
};

export default Item;
