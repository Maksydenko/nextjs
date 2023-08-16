import { FC, ReactNode } from "react";
import clsx from "clsx";

import Transition from "@/components/base/Transition/Transition";
import Body from "./Body";

import { useScrollLock } from "@/hooks/useScrollLock";

import { TypeSetState } from "@/types/setState.type";

interface PopupProps {
  className: string;
  children: ReactNode;
  button: ReactNode;
  isActive?: boolean;
  setIsActive?: TypeSetState<boolean>;
}

const Popup: FC<PopupProps> = ({
  className,
  children,
  button,
  isActive,
  setIsActive,
}) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const isActiveIsUndefined = typeof isActive === "undefined";

  const handleClick = () => {
    if (!isActiveIsUndefined && setIsActive) {
      setIsActive(!isActive);
    } else {
      setIsScrollLocked(!isScrollLocked);
    }
  };

  const handleDisablePopup = () => {
    if (!isActiveIsUndefined && setIsActive) {
      setIsActive(false);
    } else {
      setIsScrollLocked(false);
    }
  };

  const condition =
    !isActiveIsUndefined && setIsActive ? isActive : isScrollLocked;

  return (
    <div className={clsx(className, "popup")}>
      <button className="popup__button" onClick={handleClick}>
        {button}
      </button>
      <Transition condition={condition} className="popup__alert">
        <Body onClick={handleDisablePopup}>{children}</Body>
      </Transition>
    </div>
  );
};

export default Popup;
