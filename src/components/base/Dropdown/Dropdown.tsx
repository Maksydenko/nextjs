import { FC, ReactNode } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import Items from "./Items/Items";

interface DropdownProps {
  className: string;
  items: ReactNode[];
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ className, items, children }) => {
  return (
    <Menu as="div" className={clsx(className, "dropdown")}>
      <Menu.Button className="dropdown__button">{children}</Menu.Button>
      <Transition
        appear
        enter="dropdown__enter"
        enterFrom="dropdown__enter-from"
        enterTo="dropdown__enter-to"
        leave="dropdown__leave"
        leaveFrom="dropdown__leave-from"
        leaveTo="dropdown__leave-to"
      >
        <Items>{items}</Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
