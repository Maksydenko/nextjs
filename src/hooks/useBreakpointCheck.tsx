import { useState } from "react";
import { useWindowSize } from "./useWindowResize";

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

export const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  const handleResize = () => {
    setIsBreakpoint(window.innerWidth < breakpoint);
  };
  useWindowSize(handleResize);

  return isBreakpoint;
};
