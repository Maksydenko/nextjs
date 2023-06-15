import { FC } from "react";

import Body from "./Body";

import { useScrollLock } from "@/hooks/useScrollLock";

import { handleClassName } from "@/utils/className.util";

interface PopupProps {
  className: string;
  modifier?: string;
  children: JSX.Element;
  button: JSX.Element;
}

const Popup: FC<PopupProps> = ({ className, modifier, children, button }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => setIsScrollLocked(!isScrollLocked);

  return (
    <div
      className={`${handleClassName(
        !!modifier,
        `${className}__popup`,
        modifier
      )} popup`}
    >
      <button className="popup__button" onClick={handleClick}>
        {button}
      </button>
      {isScrollLocked && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
