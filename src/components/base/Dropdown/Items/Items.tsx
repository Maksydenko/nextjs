import { FC } from "react";
import { Menu } from "@headlessui/react";

import Item from "./Item";

import { TypeDropdown } from "../dropdown.type";

interface ItemsProps {
  children: TypeDropdown[];
}

const Items: FC<ItemsProps> = ({ children }) => {
  const items = children.map((item, index) => {
    /* @ts-ignore-next-line */
    const path = item?.path;
    /* @ts-ignore-next-line */
    const target = item?.target;

    if (path) {
      item = (
        <span>
          {/* @ts-ignore-next-line */}
          {item.value}
        </span>
      );
    }
    if (typeof item === "string") {
      item = <span>{item}</span>;
    }

    return (
      <Item key={index} path={path} target={target}>
        {item}
      </Item>
    );
  });

  return <Menu.Items className="dropdown__items">{items}</Menu.Items>;
};

export default Items;
