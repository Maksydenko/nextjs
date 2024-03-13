import { FC, ReactNode, useState } from "react";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import clsx from "clsx";

import s from "./ReadMore.module.scss";

interface ReadMoreProps {
  className?: string;
  children: ReactNode;
}

const ReadMore: FC<ReadMoreProps> = ({ className, children }) => {
  const [isClamped, setIsClamped] = useState(false);

  const ResponsiveEllipsis = responsiveHOC()(HTMLEllipsis);

  interface IHandleReflow {
    (clamped: boolean): void;
  }
  const handleReflow: IHandleReflow = (clamped) => {
    setIsClamped(clamped);
  };

  return (
    <div className="block">
      <ResponsiveEllipsis
        className="block__content"
        unsafeHTML={children}
        maxLine={5}
        basedOn="words"
        onReflow={handleReflow}
        style={{ overflow: "hidden" }}
      />
      {isClamped && (
        <button
          type="button"
          className={s.button}
          onClick={() => setIsClamped(true)}
        >
          wasd
        </button>
      )}
    </div>
  );
};

export default ReadMore;
