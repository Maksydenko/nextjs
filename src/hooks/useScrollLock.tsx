import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface IUseScrollLock {
  (inerts?: string[]): {
    isScrollLocked: boolean;
    setIsScrollLocked: Dispatch<SetStateAction<boolean>>;
  };
}

export const useScrollLock: IUseScrollLock = (inerts = []) => {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  interface IHandleInerts {
    (elements: (Element | null)[]): void
  }

  const setInerts: IHandleInerts = (elements) => {
    elements.forEach((element) => {
        element?.setAttribute("inert", "");
    });
  };

  const removeInerts: IHandleInerts = (elements) => {
    elements.forEach((element) => {
        element?.removeAttribute("inert");
    });
  };

  useEffect(() => {
    const { body } = document;

    const inertElements = inerts.map((inert) => {
      return document.querySelector(inert);
    });

    if (isScrollLocked) {
      body.classList.add("lock");
      setInerts(inertElements);
    } else {
      body.classList.remove("lock");
      removeInerts(inertElements);
    }

    return () => {
      body.classList.remove("lock");
      removeInerts(inertElements);
    };
  }, [inerts, isScrollLocked]);

  return {
    isScrollLocked,
    setIsScrollLocked,
  };
};
