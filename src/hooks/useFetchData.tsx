import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

export interface IUseFetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string;
}

export const useFetchData = <T,>(
  request: (searchParams: string) => Promise<AxiosResponse<T>>,
  searchParams = ""
): IUseFetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(searchParams);
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [request, searchParams]);

  return {
    data,
    isLoading,
    error,
  };
};
