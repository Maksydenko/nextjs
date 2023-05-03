import Link from "next/link";

import { useLockScroll } from "@/hooks/useLockScroll";
import { useWindowSize } from "@/hooks/useWindowSize";

import Menu from "@components/layout/navigation/Menu/Menu";

const Header = () => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
  const breakpoint = 767.98;

  const handleUnlockScroll = () => isLockedScroll && setIsLockedScroll(false);

  const handleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= breakpoint) {
      handleUnlockScroll();
    }
  };
  useWindowSize(handleBreakpointUnlockScroll, isLockedScroll);

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= breakpoint) {
      setIsLockedScroll(!isLockedScroll);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo" onClick={handleUnlockScroll}>
          <img src={logo} alt="logo" />
        </Link>
        <Menu isLockedScroll={isLockedScroll} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
