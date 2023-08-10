import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

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
        className={clsx(
          "menu__button",
          isScrollLocked && "menu__button_active"
        )}
        onClick={onClick}
      >
        <span></span>
      </button>
      <nav
        className={clsx("menu__body", isScrollLocked && "menu__body_active")}
      >
        <ul className="menu__list">
          <Items links={links} onClick={onClick} />
        </ul>
        <ThemeSwitcher onClick={onClick} />
      </nav>
    </div>
  );
};

export default Menu;
