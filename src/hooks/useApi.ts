import { useState, useEffect } from "react";
import jsonPlaceholderApiClient from "../apis/jsonPlaceholderApi";

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    jsonPlaceholderApiClient
      .get<T>(endpoint)
      .then((response) => {
        if (isMounted) setData(response.data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}
