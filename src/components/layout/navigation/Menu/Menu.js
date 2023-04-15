import Items from "./Items/Items";
// import LanguageChange from "./LanguageChange";
// import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

const Menu = ({ isActive, onMenuClick, onMenuClose }) => {
  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={`menu__button${isActive ? " _active" : ""}`}
        onClick={onMenuClick}
      >
        <span></span>
      </button>
      <nav className={`menu__body${isActive ? " _active" : ""}`}>
        <ul className="menu__list">
          <Items links={links} onMenuClose={onMenuClose} />
        </ul>
        {/* <LanguageChange onMenuClose={onMenuClose}/> */}
      </nav>
      {/* <ScrollTop /> */}
    </div>
  );
};

export default Menu;
