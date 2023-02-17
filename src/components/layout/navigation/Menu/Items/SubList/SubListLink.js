import { useState } from "react";
import { Link } from "react-router-dom";

function SubListLink(props) {
  const closeMenu = props.closeMenu;

  const [active, setActive] = useState();

  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <li className={`menu__item menu__item_sub-list${active ? " _active" : ""}`}>
      <Link to="/" className="menu__link" onClick={closeMenu}></Link>
      <span className="menu__arrow" onClick={handleClick}></span>
      <ul className="menu__sub-list">
        <li className="menu__sub-item">
          <Link to="/" className="menu__sub-link"></Link>
        </li>
      </ul>
    </li>
  );
}

export default SubListLink;
