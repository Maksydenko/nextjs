import { useState } from "react";

import { useTranslation } from "react-i18next";

import Items from "./Items/Items";
// import LanguageChange from "./LanguageChange";
// import ScrollTop from "./ScrollTop/ScrollTop";

function Menu() {
  const [active, setActive] = useState();
  function changeState() {
    setActive((prevState) => !prevState);
  }

  const root = document.getElementById("root");
  function lockScroll() {
    if (active) {
      root.classList.remove("_lock");
    } else {
      root.classList.add("_lock");
    }
  }

  function handleClick() {
    changeState();
    lockScroll();
  }

  const { t } = useTranslation();
  const links = [
    {
      value: t("home"),
      path: "/",
    },
  ];

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
          <Items links={links} closeMenu={handleClick} />
        </ul>
        {/* <LanguageChange /> */}
      </nav>
      {/* <ScrollTop /> */}
    </div>
  );
}

export default Menu;
