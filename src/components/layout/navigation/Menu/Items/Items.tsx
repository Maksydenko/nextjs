import { FC } from "react";

import Item from "./Item";
import SubList from "./SubList/SubList";

import { ILink } from "~/components/layout/navigation/links/link.interface";

interface ItemsProps {
  links: ILink[];
  isSubList?: boolean;
  onClick: () => void;
}

const Items: FC<ItemsProps> = ({ links, isSubList, onClick }) => {
  return links.map((link) => {
    const { value } = link;

    if (link.subLinks) {
      return (
        <SubList
          key={value}
          link={link}
          isSubList={!!isSubList}
          onClick={onClick}
        />
      );
    }
    return (
      <Item key={value} link={link} isSubList={isSubList} onClick={onClick} />
    );
  });
};

export default Items;
