import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@components/layout/navigation/Menu/Menu";

function Header() {
  const [active, setActive] = useState();

  function handleActiveChange() {
    setActive((prevState) => !prevState);
  }

  const root = document.getElementById("root");
  function handleScrollLock() {
    if (active) {
      root.classList.remove("_lock");
    } else {
      root.classList.add("_lock");
    }
  }

  const documentElement = document.documentElement;
  function handleMenuClick() {
    handleActiveChange();
    if (documentElement.offsetWidth <= 767.98) {
      handleScrollLock();
    }
  }

  function handleMenuClose() {
    if (active) {
      handleActiveChange();
      handleScrollLock();
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleMenuClose}>
          <img src={logo} alt="logo" />
        </Link>
        <Menu
          active={active}
          onMenuClick={handleMenuClick}
          onMenuClose={handleMenuClose}
        />
      </div>
    </header>
  );
}

export default Header;
