import Item from "./Item";

const Items = ({ links, onMenuClose: onCloseMenu }) =>
  links.map((link, index) => (
    <Item key={index} link={link} onMenuClose={onCloseMenu} />
  ));
export default Items;
