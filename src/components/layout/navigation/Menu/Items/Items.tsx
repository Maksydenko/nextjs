import { FC } from "react";

import Item from "./Item";

import { ILink } from "../../links/link.interface";

interface ItemsProps {
  links: ILink[];
  onClick: () => void;
}

const Items = ({ links, onClick }) =>
  links.map((link, index) => (
    <Item key={index} link={link} onClick={onClick} />
  ));

export default Items;
