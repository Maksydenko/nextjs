import { FC } from "react";
import clsx from "clsx";

interface LoaderProps {
  className: string;
  modifier?: string;
}

const Loader: FC<LoaderProps> = ({ className, modifier }) => {
  return (
    <div className={clsx(`${className}__loader`, modifier, "loader")}></div>
  );
};

export default Loader;
