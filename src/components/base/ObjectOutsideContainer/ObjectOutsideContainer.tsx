import { FC } from "react";

import { handleClassName } from "@/utils/className.util";

interface ObjectOutsideContainerProps {
  className: string;
  modifier: string;
  children: JSX.Element;
  object: JSX.Element;
}

const ObjectOutsideContainer: FC<ObjectOutsideContainerProps> = ({
  className,
  modifier,
  children,
  object,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    "object-outside-container",
    modifier,
    !!modifier
  );

  return (
    <section className={`${className} ${modifiedClassName}`}>
      <div className={`${modifiedClassName}__content`}>
        <div className={`${modifiedClassName}__container`}>
          <div className={`${modifiedClassName}__body`}>{children}</div>
        </div>
      </div>
      {object}
    </section>
  );
};

export default ObjectOutsideContainer;
