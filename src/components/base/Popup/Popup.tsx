import { FC, ReactNode, useState } from "react";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

import Box from "./Box";

import { TypeSetState } from "@/types/setState.type";

import s from "./Popup.module.scss";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: [
    "latin",
    // 'cyrillic-ext'
  ],
});

interface PopupProps {
  className?: string;
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
      <div className={clsx(className, s.popup)}>
        <button className={s.popup__button} type="button" onClick={handleOpen}>
          {button}
        </button>
      </div>
      <Transition appear show={condition}>
        <Dialog
          className={clsx(className, s.popup, openSans.className)}
          onClose={handleClose}
        >
          <div className={s.popup__body}>
            <Transition.Child
              className={s.popup__bg}
              enter={s.popup__enter}
              enterFrom={s.popup__enterFrom}
              enterTo={s.popup__enterTo}
              leave={s.popup__leave}
              leaveFrom={s.popup__leaveFrom}
              leaveTo={s.popup__leaveTo}
            />
            <Transition.Child
              className={s.popup__content}
              enter={clsx(s.popup__enter, s.popup__enter_content)}
              enterFrom={clsx(s.popup__enterFrom, s.popup__enterFrom_content)}
              enterTo={clsx(s.popup__enterTo, s.popup__enterTo_content)}
              leave={clsx(s.popup__leave, s.popup__Leave_content)}
              leaveFrom={clsx(s.popup__leaveFrom, s.popup__leaveFrom_content)}
              leaveTo={clsx(s.popup__leaveTo, s.popup__leaveTo_content)}
            >
              <Box onClose={handleClose}>{children}</Box>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popup;
