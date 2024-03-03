import { FC } from "react";
import Link from "next/link";

import Menu from "@/components/layout/navigation/Menu/Menu";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useWindowListener } from "@/hooks/useWindowListener";

import { Breakpoint } from "@/enums/breakpoint.enum";

const Header: FC = () => {
  const breakpoint = Breakpoint.Mobile;
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();

  const handleUnlockScroll = () => {
    if (isScrollLocked) {
      setIsScrollLocked(false);
    }
  };

  const handleUnlockScrollOnBreakpoint = () => {
    const { innerWidth } = window;
    const isMoreBreakpoint = innerWidth > breakpoint;

    if (isMoreBreakpoint && isScrollLocked) {
      handleUnlockScroll();
    }
  };
  useWindowListener("resize", handleUnlockScrollOnBreakpoint);

  const handleClick = () => {
    const { innerWidth } = window;
    const isLessBreakpoint = innerWidth < breakpoint;

    if (isLessBreakpoint) {
      setIsScrollLocked(!isScrollLocked);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link
          href="/"
          className="header__img"
          onClick={handleUnlockScroll}
        ></Link>
        <Menu
          breakpoint={breakpoint}
          isScrollLocked={isScrollLocked}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
