import { FC, MouseEvent, useRef } from "react";

import RcCollapse from "@/components/base/RcCollapse/RcCollapse";
import LinkItem from "./Items/LinkItem";
import ListItem from "./Items/ListItem";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import { Breakpoint } from "@/enums/breakpoint.enum";
import { isTouchScreen } from "@/constants/isTouchScreen.const";

import { ILink } from "@/components/layout/navigation/links/link.interface";

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
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);

  // Handle activate
  interface IHandleActivate {
    (e: MouseEvent<HTMLLIElement>): void;
  }
  const handleActivate: IHandleActivate = (e) => {
    const subListElement = subListRef.current;

    if (subListElement) {
      e.stopPropagation();

      const isSubItem = subListElement.classList.contains("menu__sub-item");

      if (!isSubItem) {
        const activeElements = document.querySelectorAll(
          ".menu__item.menu__item_sub-list.menu__item_sub-list_active"
        );
        activeElements.forEach((element) => {
          element.classList.remove("menu__item_sub-list_active");
        });
      }

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
      // e.stopPropagation();
      subListElement.classList.remove("menu__item_sub-list_active");
    }
  };

  const handleClick = () => {
    const subListElement = subListRef.current;

    if (subListElement) {
      subListElement.classList.remove("menu__item_sub-list_active");
    }
    onClick();
  };

  useOutsideClick(subListRef, "menu__item_sub-list_active");

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

  const modifiedClassName = `menu__item menu__item_sub-list${
    subList ? " menu__sub-item" : ""
  }`;

  return isMobile ? (
    <li className={modifiedClassName}>
      <RcCollapse className="menu" modifier="reverse" panels={panels} />
    </li>
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
