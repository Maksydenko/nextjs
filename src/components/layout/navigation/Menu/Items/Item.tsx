import { FC } from "react";
import Link from "next/link";

import { ILink } from "../../links/link.interface";

interface ItemProps {
  link: ILink;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ link: { value, href }, onClick }) => (
  <li className="menu__item">
    <Link href={href} className="menu__link" onClick={onClick}>
      {value}
    </Link>
  </li>
);

export default Item;
