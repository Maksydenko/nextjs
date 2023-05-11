import { FC } from "react";

interface ObjectOutsideContainerProps {
  className: string;
  children: JSX.Element;
  object: JSX.Element;
}

const ObjectOutsideContainer: FC<ObjectOutsideContainerProps> = ({
  className,
  children,
  object,
}) => (
  <section className={`${className} object-outside-container`}>
    <div className="object-outside-container__content">
      <div className="object-outside-container__container">
        <div className="object-outside-container__body">{children}</div>
      </div>
    </div>
    {object}
  </section>
);

export default ObjectOutsideContainer;
