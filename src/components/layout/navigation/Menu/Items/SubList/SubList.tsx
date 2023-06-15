import { FC, useState } from "react";

import Items from "../Items";

import { handleClassName } from "@/utils/className.util";

import { isTouchScreen } from "@/constants/isTouchScreen";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface SubListProps {
  link: ILink;
  onClick: () => void;
}

const SubList: FC<SubListProps> = ({ link: { value, subLinks }, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  // Handle active
  interface IHandleActive {
    (): void;
  }
  const handleActive: IHandleActive = () => setIsActive(!isActive);

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    setIsActive(false);
    onClick();
  };

  return (
    <li
      className={`menu__item ${handleClassName(
        isActive,
        "menu__item_sub-list"
      )}`}
      {...(isTouchScreen
        ? { onClick: handleActive }
        : {
            onMouseEnter: handleActive,
            onMouseLeave: handleActive,
          })}
    >
      <span className="menu__link">{value}</span>
      <span className="menu__arrow-down"></span>
      {subLinks && (
        <ul className="menu__sub-list">
          <Items links={subLinks} onClick={handleClick} />
        </ul>
      )}
    </li>
  );
};

export default SubList;
