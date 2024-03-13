import { FC } from "react";

import Items from "../../Items";

import { ILink } from "~/components/layout/navigation/links/link.interface";

interface ListItemProps {
  links?: ILink[];
  onClick: () => void;
}

const ListItem: FC<ListItemProps> = ({ links, onClick }) => {
  if (links) {
    return (
      <ul className="menu__sub-list">
        <Items links={links} isSubList={true} onClick={onClick} />
      </ul>
    );
  }
};

export default ListItem;
