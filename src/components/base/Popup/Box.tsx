import { Dialog } from "@headlessui/react";
import { FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  onClose: () => void;
}

const Box: FC<BoxProps> = ({ children, onClose }) => {
  return (
    <Dialog.Panel className="popup__box">
      <div className="popup__children">{children}</div>
      <button className="popup__cross" onClick={onClose}></button>
    </Dialog.Panel>
  );
};

export default Box;
