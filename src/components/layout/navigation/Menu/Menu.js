import Items from "./Items/Items";
// import LanguageChange from "./LanguageChange";
// import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

function Menu() {
  const active = props.active;
  const handleClick = props.handleClick;
  const closeMenu = props.closeMenu;

  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={`menu__button${active ? " _active" : ""}`}
        onClick={handleClick}
      >
        <span></span>
      </button>
      <nav className={`menu__body${active ? " _active" : ""}`}>
        <ul className="menu__list">
          <Items links={links} closeMenu={closeMenu} />
        </ul>
        {/* <LanguageChange closeMenu={closeMenu}/> */}
      </nav>
      {/* <ScrollTop /> */}
    </div>
  );
}

export default Menu;
