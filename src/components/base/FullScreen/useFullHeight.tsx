import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseFullHeight {
  (): {
    height: string;
  };
}

export const useFullHeight: IUseFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  const handleFullHeight = () => {
    const { innerHeight } = window;
    setHeight(`${innerHeight - 0.0001}px`);
  };
  useWindowListener(handleFullHeight);

  return { height };
};
