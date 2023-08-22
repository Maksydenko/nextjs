import { FC, MouseEvent, useRef } from "react";
import clsx from "clsx";

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
  isSubList: boolean;
  onClick: () => void;
}

const SubList: FC<SubListProps> = ({
  link: { value, path, subLinks },
  isSubList,
  onClick,
}) => {
  const subListRef = useRef<HTMLLIElement>(null);
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);

  // Handle active
  interface IHandleActive {
    (e: MouseEvent<HTMLLIElement>): void;
  }
  const handleActive: IHandleActive = (e) => {
    const { current: subListElement } = subListRef;

    if (subListElement) {
      e.stopPropagation();

      const isSubItem = subListElement.classList.contains("menu__sub-item");
      const isActive = subListElement.classList.contains(
        "menu__item_sub-list_active"
      );

      if (!isSubItem) {
        const activeElements = document.querySelectorAll(
          ".menu__item.menu__item_sub-list.menu__item_sub-list_active"
        );
        activeElements.forEach((element) => {
          element.classList.remove("menu__item_sub-list_active");
        });
      }

      if (!isActive) {
        subListElement.classList.add("menu__item_sub-list_active");
      }
    }
  };

  const handleDeactivate = () => {
    const { current: subListElement } = subListRef;

    if (subListElement) {
      subListElement.classList.remove("menu__item_sub-list_active");
    }
  };

  const handleClick = () => {
    const { current: subListElement } = subListRef;

    if (subListElement) {
      subListElement.classList.remove("menu__item_sub-list_active");
    }
    onClick();
  };

  useOutsideClick(subListRef, "menu__item_sub-list_active");

  const link = (
    <LinkItem
      value={value}
      path={path}
      isSubList={isSubList}
      onClick={handleClick}
    />
  );
  const list = <ListItem links={subLinks} onClick={handleClick} />;

  const panels = {
    key: 1,
    header: <li className="menu__item menu__item_sub-list">{link}</li>,
    content: list,
  };

  const modifiedClassName = clsx(
    "menu__item",
    "menu__item_sub-list",
    isSubList && "menu__sub-item"
  );

  if (isMobile) {
    return (
      <li className={modifiedClassName}>
        <RcCollapse
          className="menu__rc-collapse menu__rc-collapse_reverse"
          panels={panels}
        />
      </li>
    );
  }
  return (
    <li
      className={modifiedClassName}
      ref={subListRef}
      {...(isTouchScreen
        ? { onClick: handleActive }
        : {
            onMouseEnter: handleActive,
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
