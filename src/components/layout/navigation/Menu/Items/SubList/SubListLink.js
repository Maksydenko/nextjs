import { useState } from "react";

import { Link } from "react-router-dom";

function SubListLink(props) {
  const [active, setActive] = useState();

  function handleDisplaySubList() {
    setActive((prev) => !prev);
  }

  const screenWidth = document.documentElement.offsetWidth;
  const closeMenu = props.closeMenu;
  function handleClick() {
    if (screenWidth <= 767.98) {
      closeMenu();
    } else {
      closeMenu.changeState();
    }
  }

  return (
    <li className={`menu__item menu__item_sub-list${active ? " _active" : ""}`}>
      <Link to="/about" className="menu__link" onClick={handleClick}></Link>
      <span className="menu__arrow" onClick={handleDisplaySubList}></span>
      <ul className="menu__sub-list">
        <li className="menu__sub-item">
          <Link
            to="/"
            className="menu__sub-link"
            handleClick={handleDisplaySubList}
          ></Link>
        </li>
      </ul>
    </li>
  );
}

export default SubListLink;
