import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const useApi = (url: any, method: string, data = {}) => {
    const [response, setResponse] = useState<AxiosResponse<any> | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await (axios as any)[method](url, data);
        setResponse(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
  
    return { response, error, loading, fetchData };
  };
  
export default useApi;