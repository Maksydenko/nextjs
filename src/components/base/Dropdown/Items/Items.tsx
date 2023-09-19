import { FC, ReactNode } from "react";
import { Menu } from "@headlessui/react";

import Item from "./Item";
import { TypeDropdown } from "../dropdown.interface";

interface ItemsProps {
  children: ReactNode[];
}

const Items: FC<ItemsProps> = ({ children }) => {
  const items = children.map((item, index) => {
    // if (typeof item === "string") {
    //   item = item;
    // }

    return <Item key={index}>{item}</Item>;
  });

  return <Menu.Items className="dropdown__items">{items}</Menu.Items>;
};

export default Items;
