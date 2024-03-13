import { FC } from "react";
import clsx from "clsx";

interface LoaderProps {
  className?: string;
  modifier?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={clsx(`${className}__loader`, "loader")}></div>;
};

export default Loader;
