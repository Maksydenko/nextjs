import { useState } from "react";
import { Link } from "react-router-dom";

function SubListLink() {
  const [active, setAvctive] = useState();

  function hangleClick() {
    setAvctive((prev) => !prev);
  }

  return (
    <li
      className={`menu__item menu__item--sub-list${active ? " _active" : ""}`}
    >
      <Link to="/about" className="menu__link"></Link>
      <span className="menu__arrow" onClick={hangleClick}></span>
      <ul className="menu__sub-list">
        <li className="menu__sub-item">
          <Link to="" className="menu__sub-link"></Link>
        </li>
      </ul>
    </li>
  );
}

export default SubListLink;
