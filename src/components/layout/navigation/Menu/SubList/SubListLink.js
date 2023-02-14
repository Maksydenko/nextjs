import { useState } from "react";

import { Link } from "react-router-dom";

function SubListLink(props) {
  const [active, setActive] = useState();

  function openSubList() {
    setActive((prev) => !prev);
  }

  const screenWidth = document.documentElement.offsetWidth;
  const closeMenu = props.closeMenu;
  function handleClick() {
    if (screenWidth <= 767.98) {
      closeMenu();
    }
  }

  return (
    <li
      className={`menu__item menu__item--sub-list${active ? " _active" : ""}`}
    >
      <Link to="/about" className="menu__link" onClick={handleClick}></Link>
      <span className="menu__arrow" onClick={openSubList}></span>
      <ul className="menu__sub-list">
        <li className="menu__sub-item">
          <Link
            to="/"
            className="menu__sub-link"
            handleClick={openSubList}
          ></Link>
        </li>
      </ul>
    </li>
  );
}

export default SubListLink;
