import { useState } from "react";
import Link from "next/link";

const SubListLink = ({ onClick }) => {
  const [isActive, setIsActive] = useState();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      className={`menu__item menu__item_sub-list${isActive ? " _active" : ""}`}
    >
      <Link to="/" className="menu__link" onClick={onClick}></Link>
      <span className="menu__arrow-down" onClick={handleClick}></span>
      <ul className="menu__sub-list">
        <li className="menu__sub-item">
          <Link to="/" className="menu__sub-link"></Link>
        </li>
      </ul>
    </li>
  );
};

export default SubListLink;
