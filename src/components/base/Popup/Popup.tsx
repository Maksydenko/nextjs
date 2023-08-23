import { FC, ReactNode, useState } from "react";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

import { TypeSetState } from "@/types/setState.type";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: [
    "latin",
    // 'cyrillic-ext'
  ],
});

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
  const [isOpen, setIsOpen] = useState(false);
  const isActiveIsUndefined = typeof isActive === "undefined";

  const handleOpen = () => {
    if (!isActiveIsUndefined && setIsActive) {
      setIsActive(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    if (!isActiveIsUndefined && setIsActive) {
      setIsActive(false);
    } else {
      setIsOpen(false);
    }
  };

  const condition = !isActiveIsUndefined && setIsActive ? isActive : isOpen;

  return (
    <>
      <div className={clsx(className, "popup")}>
        <button className="popup__button" onClick={handleOpen}>
          {button}
        </button>
      </div>
      <Transition appear show={condition}>
        <Dialog
          className={clsx("popup", openSans.className)}
          onClose={handleClose}
        >
          <div className="popup__body">
            <Transition.Child
              className="popup__bg"
              enter="popup__enter"
              enterFrom="popup__enter-from"
              enterTo="popup__enter-to"
              leave="popup__leave"
              leaveFrom="popup__leave-from"
              leaveTo="popup__leave-to"
            />
            <Transition.Child
              className="popup__content"
              enter="popup__enter popup__enter_content"
              enterFrom="popup__enter-from popup__enter-from_content"
              enterTo="popup__enter-to popup__enter-to_content"
              leave="popup__leave popup__leave_content"
              leaveFrom="popup__leave-from popup__leave-from_content"
              leaveTo="popup__leave-to popup__leave-to_content"
            >
              <Dialog.Panel className="popup__box">
                <div className="popup__children">{children}</div>
                <button className="popup__cross" onClick={handleClose}></button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popup;
