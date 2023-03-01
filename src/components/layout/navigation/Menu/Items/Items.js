import Item from "./Item";

function Items(props) {
  const { links, onMenuClose } = props;

  return links.map((link, index) => (
    <Item key={index} link={link} onMenuClose={onMenuClose} />
  ));
}
export default Items;
