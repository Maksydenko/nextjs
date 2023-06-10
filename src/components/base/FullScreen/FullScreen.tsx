import { FC, useState } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";

interface FullScreenProps {
  className: string;
  children?: JSX.Element;
  background?: JSX.Element;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  children,
  background,
}) => {
  const [height, setHeight] = useState("100vh");

  const handleResizeHeight = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowSize(handleResizeHeight);

  const styleMinHeight = {
    minHeight: height,
  };

  return (
    <div
      className={`${className}__full-screen full-screen`}
      style={styleMinHeight}
    >
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
