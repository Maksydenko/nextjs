import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
// import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { links } from "@/components/layout/navigation/links/links.const";

interface MenuProps {
  breakpoint: number;
  isScrollLocked: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ breakpoint, isScrollLocked, onClick }) => {
  const isBreakpoint = useBreakpointCheck(breakpoint);

  return (
    <div className="header__menu menu">
      {isBreakpoint && (
        <button
          type="button"
          className={clsx(
            "menu__button",
            isScrollLocked && "menu__button_active"
          )}
          onClick={onClick}
        >
          <span></span>
        </button>
      )}
      <div
        className={clsx("menu__body", isScrollLocked && "menu__body_active")}
      >
        <nav className="menu__content">
          <ul className="menu__list">
            <Items links={links} onClick={onClick} />
          </ul>
          {/* <LanguageSwitcher onClick={onClick} /> */}
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
