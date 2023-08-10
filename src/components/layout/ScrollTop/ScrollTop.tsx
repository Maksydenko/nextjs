import { FC } from "react";
import clsx from "clsx";

import { useActiveOnScroll } from "./useActiveOnScroll";

const ScrollTop: FC = () => {
  const { isActive } = useActiveOnScroll(110);

  const handleClick = () => {
    const { scrollTo } = window;
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={clsx("scroll-top", isActive && "scroll-top_active")}
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
