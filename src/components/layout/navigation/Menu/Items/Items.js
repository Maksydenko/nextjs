import { Link } from "react-router-dom";

import Item from "./Item";

function Items(props) {
  const links = props.links;

  const screenWidth = document.documentElement.offsetWidth;
  const closeMenu = props.closeMenu;
  function handleClick() {
    if (screenWidth <= 767.98) {
      closeMenu();
    } else {
      closeMenu.changeState();
    }
  }

  return links.map((link, index) => (
    <Item key={index} link={link} handleClick={handleClick} />
  ));
}
export default Items;
