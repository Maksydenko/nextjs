import { useState, useEffect, RefObject } from "react";

interface IUseLoadingObject {
  (objectRef: RefObject<HTMLImageElement | HTMLIFrameElement>): {
    isLoading: boolean;
  };
}

export const useLoadingObject: IUseLoadingObject = (objectRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: objectCurrent } = objectRef;
    const isComplete = (objectCurrent as HTMLImageElement)?.complete;

    const isImg = objectCurrent instanceof HTMLImageElement;
    const isImgComplete = isImg && isComplete;

    if (isImgComplete) {
      handleLoadingComplete();
    } else {
      const iframe = objectCurrent?.querySelector("iframe");
      let loadingObject = iframe || objectCurrent;

      loadingObject?.addEventListener("load", handleLoadingComplete);

      return () => {
        loadingObject?.removeEventListener("load", handleLoadingComplete);
      };
    }
  }, [objectRef, isLoading]);

  return { isLoading };
};
