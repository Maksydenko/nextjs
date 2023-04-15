const Item = ({ link, onMenuClose }) => (
  <li className="menu__item">
    <Link href={link.path} className="menu__link" onClick={onMenuClose}>
      {link.value}
    </Link>
  </li>
);

export default Item;
