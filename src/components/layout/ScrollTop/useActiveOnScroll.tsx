import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseActiveOnScroll {
  (breakpoint: number): {
    isActive: boolean;
  };
}

export const useActiveOnScroll: IUseActiveOnScroll = (breakpoint) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveOnScroll = () => {
    const { scrollY } = window;
    const isBehindBreakpoint = scrollY >= breakpoint;

    if (isBehindBreakpoint) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useWindowListener("scroll", handleActiveOnScroll);

  return { isActive };
};
