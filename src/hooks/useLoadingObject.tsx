import { useState, useEffect, RefObject } from "react";

interface IUseLoadingObject {
  (objectRef: RefObject<HTMLImageElement | HTMLIFrameElement>): {
    isLoading: boolean;
  };
}

export const useLoadingObject: IUseLoadingObject = (objectRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadObject = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: objectElement } = objectRef;

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
  }, [objectRef, isLoading]);

  return { isLoading };
};
