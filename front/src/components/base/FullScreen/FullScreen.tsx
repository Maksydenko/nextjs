import { FC, ReactNode } from "react";
import clsx from "clsx";

import s from "./FullScreen.module.scss";

interface FullScreenProps {
  className?: string;
  children?: ReactNode;
  background?: ReactNode;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  children,
  background,
}) => {
  return (
    <div className={clsx(className, s.fullScreen)}>
      {children && <div className={s.fullScreen__body}>{children}</div>}
      {background && (
        <div className={s.fullScreen__background}>{background}</div>
      )}
    </div>
  );
};

export default FullScreen;
