import { useState, useCallback } from 'react';

import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { components } from './api/types';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

type TestResponse = components['schemas']['CreatePostDto'];
type responseType = TestResponse[] | null;

export const useAxiosPost = (data?: TestResponse) => {
  const url = '/posts';
  const [response, setResponse] = useState<responseType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getAllPosts = useCallback(async () => {
    const method = 'GET';
    setLoading(true);
    setError(null);
    try {
      const result = await api.request({ url, method, data });

      setResponse(result.data);
      return result.data;
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || 'Unknown error';
      setError(message);
      console.error('API Error:', message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const getOnePost = useCallback(async (id: string) => {
    const method = 'GET';
    const getUrl = `${url}/${id}`;
    setLoading(true);
    setError(null);

    try {
      const result = await api.request({ url: getUrl, method, data });
      setResponse(result.data);
      return result.data;
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || 'Unknown error';
      setError(message);
      console.error('API Error:', message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { response, loading, error, getAllPosts, getOnePost };
};
