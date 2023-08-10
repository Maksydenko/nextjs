import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";

interface TransitionProps {
  condition: boolean;
  className: string;
  modifier?: string;
  children: JSX.Element | JSX.Element[];
  timeout?: number;
  unmountOnExit?: boolean;
}

const Transition: FC<TransitionProps> = ({
  condition,
  className,
  modifier,
  timeout = 300,
  unmountOnExit = true,
  children,
}) => {
  return (
    <CSSTransition
      in={condition}
      classNames={clsx(`${className}__alert`, modifier, "alert")}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
