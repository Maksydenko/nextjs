import { useState } from "react";

import { useTranslation } from "react-i18next";

import Item from "./Item";
import LanguageChange from "./LanguageChange";

function Menu() {
  const [active, setActive] = useState();

  function hangleClick() {
    setActive((prevState) => !prevState);
    const root = document.getElementById("root");

    if (active) {
      root.classList.remove("_lock");
    } else {
      root.classList.add("_lock");
    }
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
        onClick={hangleClick}
      >
        <span></span>
      </button>
      <nav className={`menu__body${active ? " _active" : ""}`}>
        <ul className="menu__list">
          {links.map((link, index) => (
            <Item key={index} link={link} />
          ))}
        </ul>
        <LanguageChange />
      </nav>
    </div>
  );
}

export default Menu;
