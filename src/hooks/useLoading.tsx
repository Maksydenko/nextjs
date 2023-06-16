import { useState, useEffect } from "react";

interface IUseLoading {
  (object: any): boolean;
}

export const useLoading: IUseLoading = (object) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle object load
  interface IHandleObjectLoad {
    (): void;
  }
  const handleObjectLoad: IHandleObjectLoad = () => setIsLoading(false);

  useEffect(() => {
    if (object.current.complete) {
      handleObjectLoad();
    } else {
      object.current.addEventListener("load", handleObjectLoad);

      return () => {
        object.current?.removeEventListener("load", handleObjectLoad);
      };
    }
  }, [object, isLoading]);

  return isLoading;
};
