import { useState, useEffect } from "react";

interface IUseLoading {
  (object: any): boolean;
}

export const useLoading: IUseLoading = (object) => {
  const [isLoading, setIsLoading] = useState(true);
  const onObjectLoad = () => setIsLoading(false);

  useEffect(() => {
    if (object.current.complete) {
      onObjectLoad();
    } else {
      object.current.addEventListener("load", onObjectLoad);

      return () => {
        object.current?.removeEventListener("load", onObjectLoad);
      };
    }
  }, [object, isLoading]);

  return isLoading;
};
