import { FC } from "react";

import Item from "./Item";
import SubList from "./SubList/SubList";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemsProps {
  links: ILink[];
  subList?: boolean;
  onClick: () => void;
}

const Items: FC<ItemsProps> = ({ links, subList, onClick }) => {
  return links.map((link) => {
    const { value } = link;

    if (link.subLinks) {
      return (
        <SubList
          key={value}
          link={link}
          subList={!!subList}
          onClick={onClick}
        />
      );
    }
    return <Item key={value} link={link} subList={subList} onClick={onClick} />;
  });
};

export default Items;
