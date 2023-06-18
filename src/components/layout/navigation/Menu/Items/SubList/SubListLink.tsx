import { FC, useState } from "react";
import Link from "next/link";

import Items from "../Items";

import { handleClassName } from "@/utils/className.util";

import { isTouchScreen } from "@/constants/isTouchScreen.const";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface SubListLinkProps {
  link: ILink;
  onClick: () => void;
}

const SubListLink: FC<SubListLinkProps> = ({
  link: { value, href, subLinks },
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  // Handle active
  interface IHandleActive {
    (): void;
  }
  const handleActive: IHandleActive = () => {
    setIsActive(!isActive);
  };

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    setIsActive(false);
    onClick();
  };

  const modifiedClassName = handleClassName(isActive, "menu__item_sub-list");

  return (
    <li
      className={`menu__item ${modifiedClassName}`}
      {...(isTouchScreen
        ? { onClick: handleActive }
        : {
            onMouseEnter: handleActive,
            onMouseLeave: handleActive,
          })}
    >
      <Link
        href={href ? href : ""}
        className="menu__link"
        onClick={handleClick}
      >
        {value}
      </Link>
      <span className="menu__arrow-down"></span>
      {subLinks && (
        <ul className="menu__sub-list">
          <Items links={subLinks} onClick={handleClick} />
        </ul>
      )}
    </li>
  );
};

export default SubListLink;
