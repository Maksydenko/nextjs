import { FC, ReactNode } from "react";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";

interface TooltipProps {
  className: string;
  button: ReactNode;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ className, button, children }) => {
  return (
    <Popover className={clsx(className, "tooltip")}>
      {({ open }) => (
        <>
          <Popover.Button className="tooltip__button">{button}</Popover.Button>
          <Transition
            appear
            show={open}
            enter="tooltip__enter"
            enterFrom="tooltip__enter-from"
            enterTo="tooltip__enter-to"
            leave="tooltip__leave"
            leaveFrom="tooltip__leave-from"
            leaveTo="tooltip__leave-to"
          >
            <Popover.Panel className="tooltip__body">
              <div className="tooltip__content">
                <div className="tooltip__box">{children}</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Tooltip;
