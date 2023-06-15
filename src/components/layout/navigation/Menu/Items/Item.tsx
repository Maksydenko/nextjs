import { FC } from "react";
import Link from "next/link";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemProps {
  link: ILink;
  subLink?: boolean;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ link: { value, href }, subLink, onClick }) => (
  <li className={`menu__${subLink ? "sub-" : ""}item`}>
    <Link
      href={href ? href : ""}
      className={`menu__${subLink ? "sub-" : ""}link`}
      onClick={onClick}
    >
      {value}
    </Link>
  </li>
);

export default Item;
