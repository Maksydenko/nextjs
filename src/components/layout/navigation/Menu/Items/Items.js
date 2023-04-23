import Item from "./Item";

const Items = ({ links, onMenuClose }) =>
  links.map((link, index) => (
    <Item key={index} link={link} onMenuClose={onMenuClose} />
  ));
export default Items;
