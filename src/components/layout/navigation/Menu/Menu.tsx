import { FC } from "react";

import Items from "./Items/Items";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import { handleClassName } from "@/utils/className.util";

import { links } from "@/components/layout/navigation/links/links.const";

interface MenuProps {
  isScrollLocked: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ isScrollLocked, onClick }) => {
  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={handleClassName(isScrollLocked, "menu__button")}
        onClick={onClick}
      >
        <span></span>
      </button>
      <nav className={handleClassName(isScrollLocked, "menu__body")}>
        <Items links={links} onClick={onClick} />
        <ThemeSwitcher onClick={onClick} />
      </nav>
    </div>
  );
};

export default Menu;
