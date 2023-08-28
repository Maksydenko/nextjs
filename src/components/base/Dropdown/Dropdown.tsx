import { FC, ReactNode } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";

interface DropdownProps {
  className: string;
  items: ReactNode[];
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ className, items, children }) => {
  const dropdownItems = items.map((item, index) => {
    if (typeof item === "string") {
      item = <span>{item}</span>;
    }

    return (
      <Menu.Item key={index} as="div" className="dropdown__item">
        {item}
      </Menu.Item>
    );
  });

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
        <Menu.Items className="dropdown__items">{dropdownItems}</Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
