import { RefObject, useCallback, useEffect } from "react";

interface IUseOutsideClick {
  (
    ref: RefObject<HTMLElement>,
    classNameOrFunction: string | (() => void)
  ): void;
}

export const useOutsideClick: IUseOutsideClick = (ref, classNameOrFunction) => {
  // Handle outside click
  interface IHandleOutsideClick {
    (e: MouseEvent): void;
  }
  const handleOutsideClick: IHandleOutsideClick = useCallback(
    ({ target }) => {
      const element = ref.current;

      if (element && !element.contains(target as Node)) {
        const isClassName = typeof classNameOrFunction === "string";

        if (isClassName) {
          const activeElements = document.querySelectorAll(
            `.${classNameOrFunction}`
          );

          activeElements.forEach((activeElement) => {
            activeElement.classList.remove(classNameOrFunction);
          });
        } else {
          classNameOrFunction();
        }
      }
    },
    [ref, classNameOrFunction]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);
};
