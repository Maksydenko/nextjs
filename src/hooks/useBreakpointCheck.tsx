import { useState } from "react";

import { useWindowResize } from "./useWindowResize";

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

export const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  const handleBreakpointChange = () => {
    const windowWidth = window.innerWidth;
    setIsBreakpoint(windowWidth < breakpoint);
  };
  useWindowResize(handleBreakpointChange);

  return isBreakpoint;
};
