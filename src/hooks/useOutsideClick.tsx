import { RefObject, useEffect } from "react";

interface IUseOutsideClick {
  (ref: RefObject<HTMLElement>, className: string): void;
}

export const useOutsideClick: IUseOutsideClick = (ref, className) => {
  useEffect(() => {
    // Handle outside click
    interface IHandleOutsideClick {
      (e: MouseEvent): void;
    }
    const handleOutsideClick: IHandleOutsideClick = (e) => {
      if (ref) {
        const target = e.target as HTMLElement;
        const element = ref.current;

        if (element && !element.contains(target)) {
          const activeElements = document.querySelectorAll(`.${className}`);
          activeElements.forEach((element) => {
            element.classList.remove(className);
          });
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref, className]);
};
