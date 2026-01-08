import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { useState } from 'react';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const useAxios = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any,
) => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await api.request({ url, method, data });
      setResponse(result.data);
    } catch (error: any) {
      setError(error.message || 'Chyba pri poziadavke');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { response, loading, error, fetchData };
};
