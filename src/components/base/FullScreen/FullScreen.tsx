import { FC, ReactNode } from "react";
import clsx from "clsx";

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
    <div className={clsx(className, "full-screen")}>
      {children && <div className="full-screen__body">{children}</div>}
      {background && (
        <div className="full-screen__background">{background}</div>
      )}
      {color && <div className="full-screen__color" style={colorStyle}></div>}
    </div>
  );
};

export default FullScreen;
