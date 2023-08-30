import { FC, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";

interface ItemProps {
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children }) => {
  return (
    <Menu.Item as="div" className="dropdown__item">
      {({ active }) => (
        <div
          className={clsx(
            "dropdown__children",
            active && "dropdown__children--active"
          )}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );
};

export default Item;
