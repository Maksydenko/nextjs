import { RefObject, useCallback, useEffect } from "react";

interface IUseOutsideClick {
  (
    ref: RefObject<HTMLElement>,
    classNameOrHandler: string | (() => void)
  ): void;
}

export const useOutsideClick: IUseOutsideClick = (ref, classNameOrHandler) => {
  // Handle outside click
  interface IHandleOutsideClick {
    (e: MouseEvent): void;
  }
  const handleOutsideClick: IHandleOutsideClick = useCallback(
    ({ target }) => {
      const { current: element } = ref;

      if (element && !element.contains(target as Node)) {
        const isClassName = typeof classNameOrHandler === "string";

        if (isClassName) {
          const activeElements = document.querySelectorAll(
            `.${classNameOrHandler}`
          );

          activeElements.forEach((activeElement) => {
            activeElement.classList.remove(classNameOrHandler);
          });
        } else {
          classNameOrHandler();
        }
      }
    },
    [ref, classNameOrHandler]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);
};
