import { useState, useEffect } from "react";

export const useScrollLock = () => {
  const [isLockedScroll, setIsLockedScroll] = useState();

  useEffect(() => {
    const body = document.body;

    if (isLockedScroll) {
      body.classList.add("_lock");
    } else {
      body.classList.remove("_lock");
    }

    return () => {
      body.classList.remove("_lock");
    };
  }, [isLockedScroll]);

  return { isLockedScroll, setIsLockedScroll };
};
