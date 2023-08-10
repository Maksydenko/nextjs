import { FC, ReactNode } from "react";
import clsx from "clsx";

interface FullScreenProps {
  className: string;
  modifier?: string;
  children?: ReactNode;
  background?: ReactNode;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  modifier,
  children,
  background,
}) => {
  return (
    <div className={clsx(`${className}__full-screen`, modifier, "full-screen")}>
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
