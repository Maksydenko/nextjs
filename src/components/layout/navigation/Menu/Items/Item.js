import Link from "next/link";

const Item = ({ link, onCloseMenu }) => (
  <li className="menu__item">
    <Link href={link.path} className="menu__link" onClick={onCloseMenu}>
      {link.value}
    </Link>
  </li>
);

export default Item;
