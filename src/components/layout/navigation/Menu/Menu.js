import Items from "./Items/Items";

import { getActiveClassName } from "@/utils/className.utils";

import links from "@layout/navigation/links.const";

const Menu = ({ isLockedScroll, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={getActiveClassName("menu__button", isLockedScroll)}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={getActiveClassName("menu__body", isLockedScroll)}>
      <ul className="menu__list">
        <Items links={links} onClick={onClick} />
      </ul>
    </nav>
    {/* <ScrollTop /> */}
  </div>
);

export default Menu;
