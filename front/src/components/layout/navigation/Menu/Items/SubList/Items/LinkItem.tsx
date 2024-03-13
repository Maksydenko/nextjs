import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface LinkItemProps {
  value: ILink["value"];
  path: ILink["path"];
  isSubList: boolean;
  onClick: () => void;
}

const LinkItem: FC<LinkItemProps> = ({ value, path, isSubList, onClick }) => {
  const modifiedClassName = clsx("menu__link", isSubList && "menu__sub-link");

  if (path) {
    return (
      <Link href={path} className={modifiedClassName} onClick={onClick}>
        {value}
      </Link>
    );
  }
  return <span className={modifiedClassName}>{value}</span>;
};

export default LinkItem;
