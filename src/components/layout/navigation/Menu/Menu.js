import { useState } from "react";

import { useTranslation } from "react-i18next";

import Item from "./Item";
// import LanguageChange from "./LanguageChange";
// import ScrollTop from "./ScrollTop/ScrollTop";

function Menu() {
  const [active, setActive] = useState();

  function lockScroll() {
    const root = document.getElementById("root");

    if (active) {
      root.classList.remove("_lock");
    } else {
      root.classList.add("_lock");
    }
  }

  function handleClick() {
    setActive((prevState) => !prevState);
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
          {links.map((link, index) => (
            <Item key={index} link={link} closeMenu={handleClick} />
          ))}
        </ul>
        {/* <LanguageChange /> */}
      </nav>
      {/* <ScrollTop /> */}
    </div>
  );
}

export default Menu;
