import { FC } from "react";
import Link from "next/link";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface LinkItemProps {
  value: ILink["value"];
  href: ILink["href"];
  subList: boolean;
  onClick: () => void;
}

const LinkItem: FC<LinkItemProps> = ({ value, href, subList, onClick }) => {
  const modifiedClassName = `menu__link${subList ? " menu__sub-link" : ""}`;

  if (href) {
    return (
      <Link href={href} className={modifiedClassName} onClick={onClick}>
        {value}
      </Link>
    );
  }
  return <span className={modifiedClassName}>{value}</span>;
};

export default LinkItem;
