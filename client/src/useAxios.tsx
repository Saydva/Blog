import { useState, useCallback } from 'react';

import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { components } from './api/types';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

type TestResponse = components['schemas']['CreatePostDto'];

export const useAxios = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any,
) => {
  const [response, setResponse] = useState<TestResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
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
  }, [url, method, data]);
  return { response, loading, error, fetchData };
};
