import Items from "./Items/Items";
// import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

const Menu = ({ isActive, onMenuClick, onMenuClose }) => {
  const activeClass = (className) => {
    return `${className}${isActive ? " _active" : ""}`;
  };

  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={activeClass(menu__button)}
        onClick={onMenuClick}
      >
        <span></span>
      </button>
      <nav className={activeClass("menu__body")}>
        <ul className="menu__list">
          <Items links={links} onMenuClose={onMenuClose} />
        </ul>
      </nav>
      {/* <ScrollTop /> */}
    </div>
  );
};

export default Menu;
