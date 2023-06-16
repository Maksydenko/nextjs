import { useState, useEffect } from "react";

interface IUseLoading {
  (object: any): boolean;
}

export const useLoading: IUseLoading = (object) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle object load
  interface IHandleObjectLoaded {
    (): void;
  }
  const handleLoadedObject: IHandleObjectLoaded = () => setIsLoading(false);

  useEffect(() => {
    const isVideo = object.current.tagName === "VIDEO";

    if (object.current.complete) {
      handleLoadedObject();
    } else {
      object.current.addEventListener("load", handleLoadedObject);
      isVideo &&
        object.current.addEventListener("loadedmetadata", handleLoadedObject);

      return () => {
        object.current?.removeEventListener("load", handleLoadedObject);
        isVideo &&
          object.current?.removeEventListener(
            "loadedmetadata",
            handleLoadedObject
          );
      };
    }
  }, [object, isLoading]);

  return isLoading;
};
