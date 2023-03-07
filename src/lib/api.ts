import axios, { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next/types';
import Cookies from 'universal-cookie';

const isServer = () => typeof window === 'undefined';
import { getToken } from '@/lib/cookies';
import { UninterceptedApiError } from '@/types/api';
const context = <GetServerSidePropsContext>{};

const baseURL =
  process.env.NEXT_PUBLIC_RUN_MODE === 'local'
    ? process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL
    : process.env.NEXT_PUBLIC_RUN_MODE === 'vercel'
    ? process.env.NEXT_PUBLIC_BACKEND_URL_VERCEL
    : process.env.NEXT_PUBLIC_BACKEND_URL;

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },

  withCredentials: false,
});

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  if (config.headers) {
    let token: string | undefined;

    if (isServer()) {
      if (!context)
        throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

      const cookies = new Cookies(context.req?.headers.cookie);
      token = cookies.get('@myevent/token');
    } else {
      token = getToken();
    }

    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  }
);
export default api;
