import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@components/layout/navigation/Menu/Menu";

function Header() {
  const [active, setActive] = useState();

  function changeActive() {
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

  const documentElement = document.documentElement;
  function handleClick() {
    changeActive();
    if (documentElement.offsetWidth <= 767.98) {
      lockScroll();
    }
  }

  function closeMenu() {
    if (active) {
      changeActive();
      lockScroll();
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
          <Menu
            active={active}
            handleClick={handleClick}
            closeMenu={closeMenu}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
