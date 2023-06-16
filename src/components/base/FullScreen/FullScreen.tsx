import { FC, useState } from "react";

import { useWindowResize } from "@/hooks/useWindowResize";
import { handleClassName } from "@/utils/className.util";

interface FullScreenProps {
  className: string;
  modifier?: string;
  children?: JSX.Element;
  background?: JSX.Element;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  modifier,
  children,
  background,
}) => {
  const [height, setHeight] = useState("100vh");

  const handleResizeHeight = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowResize(handleResizeHeight);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__full-screen`,
    modifier
  );

  const style = {
    minHeight: height,
  };

  return (
    <div className={`${modifiedClassName} full-screen`} style={style}>
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
