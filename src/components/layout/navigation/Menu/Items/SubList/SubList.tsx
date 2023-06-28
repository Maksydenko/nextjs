import { FC, MouseEvent, useRef } from "react";

import RcCollapse from "@/components/base/RcCollapse/RcCollapse";
import ListItem from "./ListItem";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import { Breakpoint } from "@/enums/breakpoint.enum";
import { isTouchScreen } from "@/constants/isTouchScreen.const";

import { ILink } from "@/components/layout/navigation/links/link.interface";
import LinkItem from "./LinkItem";

interface SubListProps {
  link: ILink;
  subList: boolean;
  onClick: () => void;
}

const SubList: FC<SubListProps> = ({
  link: { value, href, subLinks },
  subList,
  onClick,
}) => {
  const subListRef = useRef<HTMLLIElement>(null);

  // Handle activate
  interface IHandleActivate {
    (e: MouseEvent<HTMLLIElement>): void;
  }
  const handleActivate: IHandleActivate = (e) => {
    const subListElement = subListRef.current;

    if (subListElement) {
      e.stopPropagation();
      subListElement.classList.add("menu__item_sub-list_active");
    }
  };
  // Handle deactivate
  interface IHandleDeactivate {
    (e: MouseEvent<HTMLLIElement>): void;
  }
  const handleDeactivate: IHandleDeactivate = (e) => {
    const subListElement = subListRef.current;

    if (subListElement) {
      e.stopPropagation();
      subListElement.classList.remove("menu__item_sub-list_active");
    }
  };

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    const subListElement = subListRef.current;

    if (subListElement) {
      subListElement.classList.remove("menu__item_sub-list_active");
    }
    onClick();
  };

  if (isTouchScreen) {
    useOutsideClick(subListRef, "menu__item_sub-list_active");
  }

  const isMobile = useBreakpointCheck(Breakpoint.Mobile);

  const link = (
    <LinkItem
      value={value}
      href={href}
      subList={subList}
      onClick={handleClick}
    />
  );
  const list = <ListItem links={subLinks} onClick={handleClick} />;

  const panels = {
    key: 1,
    header: <li className="menu__item menu__item_sub-list">{link}</li>,
    content: list,
  };

  const modifiedClassName = `menu__item menu__item_sub-list ${
    subList ? " menu__sub-item" : ""
  }`;

  return isMobile ? (
    <RcCollapse className="menu" panels={panels} />
  ) : (
    <li
      className={modifiedClassName}
      ref={subListRef}
      {...(isTouchScreen
        ? { onClick: handleActivate }
        : {
            onMouseEnter: handleActivate,
            onMouseLeave: handleDeactivate,
          })}
    >
      {link}
      <span className="menu__arrow"></span>
      {list}
    </li>
  );
};

export default SubList;
