import { Link } from "react-router-dom";

function Item(props) {
  const link = props.link;
  const closeMenu = props.closeMenu;

  return (
    <li className="menu__item">
      <Link to={link.path} className="menu__link" onClick={closeMenu}>
        {link.value}
      </Link>
    </li>
  );
}

export default Item;
