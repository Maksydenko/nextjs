import Link from "next/link";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useWindowSize } from "@/hooks/useWindowSize";

import Menu from "@components/layout/navigation/Menu/Menu";

const Header = () => {
  const { isLockedScroll, setIsLockedScroll } = useScrollLock();
  const breakPoint = 767.98;

  const handleLockScroll = () => setIsLockedScroll(!isLockedScroll);

  const handleUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= breakPoint && isLockedScroll) {
      handleLockScroll();
    }
  };

  useWindowSize(handleUnlockScroll, isLockedScroll);

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= breakPoint) {
      handleLockScroll();
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo" onClick={handleClick}>
          <img src={logo} alt="logo" />
        </Link>
        <Menu isLockedScroll={isLockedScroll} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
