import { FC } from "react";
import Link from "next/link";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemProps {
  link: ILink;
  isSubList?: boolean;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ link: { value, path }, isSubList, onClick }) => {
  const className = `menu__${isSubList ? "sub-" : ""}`;

  return (
    <li className={`${className}item`}>
      <Link href={path || ""} className={`${className}link`} onClick={onClick}>
        {value}
      </Link>
    </li>
  );
};

export default Item;
