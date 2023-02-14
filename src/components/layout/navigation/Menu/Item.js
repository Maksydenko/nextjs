import { Link } from "react-router-dom";

function Item(props) {
  const link = props.link;

  const screenWidth = document.documentElement.offsetWidth;
  const closeMenu = props.closeMenu;
  function handleClick() {
    if (screenWidth <= 767.98) {
      closeMenu();
    }
  }

  return (
    <li className="menu__item">
      <Link to={link.path} className="menu__link" onClick={handleClick}>
        {link.value}
      </Link>
    </li>
  );
}
export default Item;
