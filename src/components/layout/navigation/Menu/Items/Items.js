import Item from "./Item";

function Items(props) {
  const links = props.links;
  const closeMenu = props.closeMenu;

  return links.map((link, index) => (
    <Item key={index} link={link} closeMenu={closeMenu} />
  ));
}
export default Items;
