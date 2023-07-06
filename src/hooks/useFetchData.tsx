import { useEffect, useState } from "react";
// import axios from "axios";

interface IUseFetchData {
  (url: string): {
    data: any;
    isLoading: boolean;
    error: string;
  };
}

export const useFetchData: IUseFetchData = (url) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();

        setData(result);

        // const { get } = axios;
        // const response = await get(url);

        // setData(response.data);
      };
      fetchData();
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error };
};
