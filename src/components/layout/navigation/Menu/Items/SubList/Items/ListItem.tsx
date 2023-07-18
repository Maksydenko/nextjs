import { FC, MouseEvent } from "react";

import Items from "../../Items";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ListItemProps {
  links?: ILink[];
  onClick: () => void;
}

const ListItem: FC<ListItemProps> = ({ links, onClick }) => {
  // Handle click
  interface IHandleClick {
    (e: MouseEvent<HTMLElement>): void;
  }
  const handleClick: IHandleClick = (e) => {
    e.stopPropagation();
  };

  if (links) {
    return (
      <ul className="menu__sub-list" onClick={handleClick}>
        <Items links={links} subList={true} onClick={onClick} />
      </ul>
    );
  }
};

export default ListItem;
