import { Link } from "react-router-dom";

function Item(props) {
  const link = props.link;

  return (
    <li className="menu__item">
      <Link to={link.path} className="menu__link">
        {link.value}
      </Link>
    </li>
  );
}

export default Item;
