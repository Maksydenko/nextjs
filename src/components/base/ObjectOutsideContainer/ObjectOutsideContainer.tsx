import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ObjectOutsideContainerProps {
  className: string;
  modifier: string;
  children: ReactNode;
  object: ReactNode;
}

const ObjectOutsideContainer: FC<ObjectOutsideContainerProps> = ({
  className,
  modifier,
  children,
  object,
}) => {
  const modifiedClassName = modifier
    ? `object-outside-container_${modifier}`
    : "object-outside-container";

  return (
    <section
      className={clsx(
        `${className}__object-outside-container`,
        modifiedClassName
      )}
    >
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
