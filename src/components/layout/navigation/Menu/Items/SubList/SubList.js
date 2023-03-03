import { useState } from "react";
import { Link } from "react-router-dom";

function SubList() {
  const [isActive, setIsActive] = useState();

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <li
      className={`menu__item menu__item_sub-list${isActive ? " _active" : ""}`}
      onClick={handleClick}
    >
      <span className="menu__link"></span>
      <span className="menu__arrow-down"></span>
      <ul className="menu__sub-list">
        <li className="menu__sub-item">
          <Link to="/" className="menu__sub-link"></Link>
        </li>
      </ul>
    </li>
  );
}

export default SubList;
