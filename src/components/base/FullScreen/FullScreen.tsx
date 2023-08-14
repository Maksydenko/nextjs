import { FC, ReactNode } from "react";
import clsx from "clsx";

interface FullScreenProps {
  className: string;
  children?: ReactNode;
  background?: ReactNode;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  children,
  background,
}) => {
  return (
    <div className={clsx(className, "full-screen")}>
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
