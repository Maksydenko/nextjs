"use client";

import { FC } from "react";

import { useActiveOnScroll } from "./useActiveOnScroll";

import { handleClassName } from "@/utils/className.util";

const ScrollTop: FC = () => {
  const isActive: boolean = useActiveOnScroll();

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

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
