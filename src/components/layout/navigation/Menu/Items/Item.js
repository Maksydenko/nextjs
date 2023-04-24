import Link from "next/link";

const Item = ({ link, onClick }) => (
  <li className="menu__item">
    <Link href={link.path} className="menu__link" onClick={onClick}>
      {link.value}
    </Link>
  </li>
);

export default Item;
