import { FC } from "react";

import Item from "./Item";
import SubListLink from "./SubList/SubListLink";
import SubList from "./SubList/SubList";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemsProps {
  links: ILink[];
  onClick: () => void;
}

const Items: FC<ItemsProps> = ({ links, onClick }) => {
  const items = links.map((link) => {
    if (link.subLinks) {
      if (link.href) {
        return <SubListLink key={link.value} link={link} onClick={onClick} />;
      }
      return <SubList key={link.value} link={link} onClick={onClick} />;
    }
    return <Item key={link.value} link={link} onClick={onClick} />;
  });

  return <ul className="menu__list">{items}</ul>;
};

export default Items;
