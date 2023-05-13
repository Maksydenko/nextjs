import { FC } from "react";

import Items from "./Items/Items";

import { getModifierClassName } from "@/utils/className.util";

import { links } from "../links.const";

interface MenuProps {
  isLockedScroll: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ isLockedScroll, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={getModifierClassName(isLockedScroll, "menu__button")}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={getModifierClassName(isLockedScroll, "menu__body")}>
      <ul className="menu__list">
        <Items links={links} onClick={onClick} />
      </ul>
    </nav>
  </div>
);

export default Menu;
