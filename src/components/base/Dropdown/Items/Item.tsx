import { FC, Fragment, ReactNode, useState } from "react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";

import { TypeDropdown } from "../dropdown.interface";

interface ItemProps {
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Menu.Item
    // className={clsx("dropdown__item", isActive && "dropdown__item--active")}
    >
      {({ active }) => {
        active && setIsActive(true);
        !active && setIsActive(false);
        return children;
      }}
    </Menu.Item>
  );
};

export default Item;
