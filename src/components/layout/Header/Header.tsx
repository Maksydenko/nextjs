import { FC } from "react";
import Link from "next/link";

import { useLockScroll } from "@/hooks/useLockScroll";
import { useWindowSize } from "@/hooks/useWindowSize";

import Menu from "@/components/layout/navigation/Menu/Menu";

const Header: FC = () => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
  const breakpoint = 767.98;

  // Handle unlock scroll
  interface IHandleUnlockScroll {
    (): void;
  }
  const handleUnlockScroll: IHandleUnlockScroll = () =>
    isLockedScroll && setIsLockedScroll(false);

  // handleBreakpointUnlockScroll
  interface IHandleBreakpointUnlockScroll {
    (): void;
  }
  const handleBreakpointUnlockScroll: IHandleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    windowWidth >= breakpoint && handleUnlockScroll();
  };
  useWindowSize(handleBreakpointUnlockScroll, isLockedScroll);

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    const windowWidth = window.innerWidth;
    windowWidth <= breakpoint && setIsLockedScroll(!isLockedScroll);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link
          href="/"
          className="header__logo"
          onClick={handleUnlockScroll}
        ></Link>
        <Menu isLockedScroll={isLockedScroll} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
