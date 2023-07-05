import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseActiveOnScroll {
  (): boolean;
}

export const useActiveOnScroll: IUseActiveOnScroll = () => {
  const [isActive, setIsActive] = useState(false);
  const breakpoint = 110;

  const handleActiveOnScroll = () => {
    const { scrollY } = window;
    const isBehindBreakpoint = scrollY >= breakpoint;

    if (isBehindBreakpoint) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useWindowListener(handleActiveOnScroll, "scroll");

  return isActive;
};
