import Items from "./Items/Items";
// import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

const Menu = ({ isLockedScroll, onClick }) => {
  const activeClass = (className) => {
    return `${className}${isLockedScroll ? " _active" : ""}`;
  };

  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={activeClass(menu__button)}
        onClick={onClick}
      >
        <span></span>
      </button>
      <nav className={activeClass("menu__body")}>
        <ul className="menu__list">
          <Items links={links} onClick={onClick} />
        </ul>
      </nav>
      {/* <ScrollTop /> */}
    </div>
  );
};

export default Menu;
