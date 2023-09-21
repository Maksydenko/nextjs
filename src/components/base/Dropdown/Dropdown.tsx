import { FC, ReactNode, useState } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";

import Items from "./Items/Items";

import { TypeDropdown } from "./dropdown.type";

interface DropdownProps {
  className: string;
  items: TypeDropdown[];
  children: ReactNode;
  hover?: boolean;
}

const Dropdown: FC<DropdownProps> = ({ className, items, children, hover }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      as="div"
      className={clsx(className, "dropdown")}
      {...(hover && {
        onMouseEnter: handleOpen,
        onMouseLeave: handleClose,
      })}
    >
      <Menu.Button className="dropdown__button">{children}</Menu.Button>
      <Transition
        appear
        {...(hover && {
          show: isOpen,
        })}
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
