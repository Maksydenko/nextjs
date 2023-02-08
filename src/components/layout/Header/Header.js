import { Link } from "react-router-dom";

import Menu from "@components/layout/navigation/Menu/Menu";
import MenuRoutes from "@components/layout/navigation/Menu/MenuRoutes";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <Menu />
        </div>
      </header>
      <MenuRoutes />
    </>
  );
}

export default Header;