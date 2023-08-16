import { FC } from "react";
import Link from "next/link";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemProps {
  link: ILink;
  isSubList?: boolean;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ link: { value, href }, isSubList, onClick }) => {
  const modifiedClassName = `menu__${isSubList ? "sub-" : ""}`;

  return (
    <li className={`${modifiedClassName}item`}>
      <Link
        href={href || ""}
        className={`${modifiedClassName}link`}
        onClick={onClick}
      >
        {value}
      </Link>
    </li>
  );
};

export default Item;
