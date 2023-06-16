import { useState } from "react";

import { useWindowResize } from "./useWindowResize";

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

export const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  // Handle breakpoint change
  interface IHandleBreakpointChange {
    (): void;
  }
  const handleBreakpointChange: IHandleBreakpointChange = () => {
    const windowWidth = window.innerWidth;
    setIsBreakpoint(windowWidth < breakpoint);
  };
  useWindowResize(handleBreakpointChange);

  return isBreakpoint;
};
