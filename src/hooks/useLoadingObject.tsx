import { useState, useEffect, RefObject } from "react";

interface IUseLoadingObject {
  (object: RefObject<HTMLImageElement> | RefObject<HTMLIFrameElement>): boolean;
}

export const useLoadingObject: IUseLoadingObject = (object) => {
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
