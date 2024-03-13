import { FC, ReactNode } from "react";
import { Dialog } from "@headlessui/react";

import s from "./Popup.module.scss";

interface BoxProps {
  children: ReactNode;
  onClose: () => void;
}

const Box: FC<BoxProps> = ({ children, onClose }) => {
  return (
    <Dialog.Panel className={s.popup__box}>
      <div className={s.popup__children}>{children}</div>
      <button className={s.popup__cross} type="button" onClick={onClose} />
    </Dialog.Panel>
  );
};

export default Box;
