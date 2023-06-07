import { FC } from "react";

import Item from "./Item";

import { ILink } from "../../links/link.interface";

interface ItemsProps {
  links: ILink[];
  onClick: () => void;
}

const Items: FC<ItemsProps> = ({ links, onClick }) => (
  <>
    {links.map((link) => (
      <Item key={link.href} link={link} onClick={onClick} />
    ))}
  </>
);

export default Items;
