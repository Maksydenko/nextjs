import { FC, ReactNode } from "react";
import clsx from "clsx";

import s from "./FullScreen.module.scss";

interface FullScreenProps {
  className?: string;
  children?: ReactNode;
  background?: ReactNode;
  color?: string;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  children,
  background,
  color,
}) => {
  const colorStyle = {
    background: color,
  };

  return (
    <div className={clsx(className, s.fullScreen)}>
      {children && <div className={s.fullScreen__body}>{children}</div>}
      {background && (
        <div className={s.fullScreen__background}>{background}</div>
      )}
      {color && <div className={s.fullScreen__color} style={colorStyle}></div>}
    </div>
  );
};

export default FullScreen;
