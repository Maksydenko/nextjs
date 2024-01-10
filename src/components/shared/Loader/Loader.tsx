import { FC } from "react";
import clsx from "clsx";

import s from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={clsx(className, s.loader)}></div>;
};

export default Loader;
