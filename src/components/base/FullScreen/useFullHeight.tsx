import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseFullHeight {
  (): string;
}

export const useFullHeight: IUseFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  const handleResizeHeight = () => {
    const { innerHeight } = window;
    setHeight(`${innerHeight - 0.0001}px`);
  };
  useWindowListener(handleResizeHeight);

  return height;
};
