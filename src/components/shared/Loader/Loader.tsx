import { FC } from "react";

import { handleClassName } from "@/utils/className.util";

interface LoaderProps {
  className: string;
  modifier?: string;
}

const Loader: FC<LoaderProps> = ({ className, modifier }) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__loader`,
    modifier
  );

  return <div className={`${modifiedClassName} loader`}></div>;
};

export default Loader;
