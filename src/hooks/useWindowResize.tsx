import { useEffect } from "react";

interface IUseWindowSize {
  (handler: () => void): void;
}

export const useWindowResize: IUseWindowSize = (handler) =>
  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [handler]);
