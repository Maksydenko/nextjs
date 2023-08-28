import { FC, ReactNode } from "react";
import { Menu } from "@headlessui/react";

interface ItemProps {
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children }) => {
  return (
    <Menu.Item as="div" className="dropdown__item">
      {children}
    </Menu.Item>
  );
};

export default Item;
