import { useState, useEffect, RefObject } from "react";

export const useLoadingObject = (
  object: RefObject<HTMLImageElement> | RefObject<HTMLIFrameElement>
) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadObject = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const objectElement = object.current;

    const isImg = objectElement instanceof HTMLImageElement;
    const isImgComplete = isImg && objectElement.complete;

    if (isImgComplete) {
      handleLoadObject();
    } else {
      objectElement?.addEventListener("load", handleLoadObject);

      return () => {
        objectElement?.removeEventListener("load", handleLoadObject);
      };
    }
  }, [object, isLoading]);

  return isLoading;
};
