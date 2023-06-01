import { FC } from "react";
import { CSSTransition } from "react-transition-group";

interface TransitionProps {
  condition: boolean;
  className: string;
  timeout: number;
  unmountOnExit: boolean;
  children: JSX.Element;
}

const Transition: FC<TransitionProps> = ({
  condition,
  className = "alert",
  timeout = 300,
  unmountOnExit = true,
  children,
}) => (
  <CSSTransition
    in={condition}
    classNames={className}
    timeout={timeout}
    unmountOnExit={unmountOnExit}
  >
    {children}
  </CSSTransition>
);

export default Transition;
