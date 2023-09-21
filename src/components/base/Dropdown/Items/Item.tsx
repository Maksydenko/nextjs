import { FC, useState } from "react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";

import { TypeDropdown, TypeLinkTarget, TypeTarget } from "../dropdown.type";

interface ItemProps {
  children: TypeDropdown;
  path?: TypeLinkTarget["path"];
  target?: TypeTarget;
}

const Item: FC<ItemProps> = ({ children, path, target = "_self" }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive(true);
  };

  const handleDeactivate = () => {
    setIsActive(false);
  };

  return (
    <Menu.Item
      as={path ? "a" : "div"}
      {...(path && {
        href: path,
        target,
      })}
      className={clsx("dropdown__item", isActive && "dropdown__item--active")}
    >
      {/* @ts-ignore-next-line */}
      {({ active }) => {
        active && handleActivate();
        !active && handleDeactivate();

        return children;
      }}
    </Menu.Item>
  );
};

export default Item;
