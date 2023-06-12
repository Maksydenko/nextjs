import { FC } from "react";

import Items from "./Items/Items";

import { handleClassName } from "@/utils/className.util";

import { links } from "../links/links.const";

interface MenuProps {
  isScrollLocked: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ isScrollLocked, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={handleClassName(isScrollLocked, "menu__button")}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={handleClassName(isScrollLocked, "menu__body")}>
      <ul className="menu__list">
        <Items links={links} onClick={onClick} />
      </ul>
    </nav>
  </div>
);

export default Menu;
