import { FC } from "react";
import Link from "next/link";

import Menu from "@/components/layout/navigation/Menu/Menu";

import { useLockScroll } from "@/hooks/useLockScroll";
import { useWindowResize } from "@/hooks/useWindowResize";

import { Breakpoint } from "@/enums/breakpoint.enum";

const Header: FC = () => {
  const { isScrollLocked, setIsScrollLocked } = useLockScroll();
  const breakpoint = Breakpoint.Mobile;

  // Handle unlock scroll
  interface IHandleUnlockScroll {
    (): void;
  }
  const handleUnlockScroll: IHandleUnlockScroll = () =>
    isScrollLocked && setIsScrollLocked(false);

  // handleBreakpointUnlockScroll
  interface IHandleBreakpointUnlockScroll {
    (): void;
  }
  const handleBreakpointUnlockScroll: IHandleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    const isMoreBreakPoint = windowWidth > breakpoint;
    isMoreBreakPoint && isScrollLocked && handleUnlockScroll();
  };
  useWindowResize(handleBreakpointUnlockScroll);

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    const windowWidth = window.innerWidth;
    const isLessBreakPoint = windowWidth < breakpoint;
    isLessBreakPoint && setIsScrollLocked(!isScrollLocked);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link
          href="/"
          className="header__logo"
          onClick={handleUnlockScroll}
        ></Link>
        <Menu isScrollLocked={isScrollLocked} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
