import { FC } from "react";

import { useActiveOnScroll } from "./useActiveOnScroll";

import { handleClassName } from "@/utils/className.util";

const ScrollTop: FC = () => {
  const isActive = useActiveOnScroll();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={handleClassName(isActive, "scroll-top")}
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
