import { Popover } from "@headlessui/react";
import { FC, ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
  return (
    <Popover.Panel className="tooltip__body">
      <div className="tooltip__content">
        <div className="tooltip__box">{children}</div>
      </div>
    </Popover.Panel>
  );
};

export default Body;
