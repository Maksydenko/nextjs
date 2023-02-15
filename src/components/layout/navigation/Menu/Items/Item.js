import { Link } from "react-router-dom";

function Item(props) {
  const link = props.link;
  const handleClick = props.handleClick;

  return (
    <li className="menu__item">
      <Link to={link.path} className="menu__link" onClick={handleClick}>
        {link.value}
      </Link>
    </li>
  );
}

export default Item;
