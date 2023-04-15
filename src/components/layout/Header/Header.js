import { useState } from "react";

import Menu from "@components/layout/navigation/Menu/Menu";

const Header = () => {
  const [isActive, setIsActive] = useState();

  const handleActiveChange = () => {
    setIsActive((prevState) => !prevState);
  };

  const body = document.body;
  const handleScrollLock = () => {
    if (isActive) {
      body.classList.remove("_lock");
    } else {
      body.classList.add("_lock");
    }
  };

  const documentElement = document.documentElement;
  const handleMenuClick = () => {
    handleActiveChange();
    if (documentElement.offsetWidth <= 767.98) {
      handleScrollLock();
    }
  };

  const handleMenuClose = () => {
    if (isActive) {
      handleActiveChange();
      handleScrollLock();
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo" onClick={handleMenuClose}>
          <img src={logo} alt="logo" />
        </Link>
        <Menu
          isActive={isActive}
          onMenuClick={handleMenuClick}
          onMenuClose={handleMenuClose}
        />
      </div>
    </header>
  );
};

export default Header;
