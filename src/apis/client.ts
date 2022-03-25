import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { URLS } from '@/constants';
import { LoginResponse, ResponseEntity } from '@/types';

const defaultAxiosConfig = {
  baseURL: URLS.API.PREFIX,
  withCredentials: true,
};

export const client = axios.create(defaultAxiosConfig);

interface AxiosRetryConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

client.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response } = error;
    const config: AxiosRetryConfig = error.config;

    if (response?.status === 401 && !config._retry) {
      config._retry = true;

      try {
        const { data } = await axios.get<ResponseEntity<LoginResponse>>(
          URLS.API.AUTH.REFRESH,
          defaultAxiosConfig,
        );
        const { accessToken } = data.data;

        // Refresh 토큰으로 가져온 Access 토큰을
        // axios 인스턴스 (client) 에 집어넣습니다.
        setBearerToken(accessToken);
        // 그 후 재요청을 위한 1회성 Authorization 헤더에도 집어넣습니다.
        if (config.headers) {
          config.headers.Authorization = setBearerPrefix(accessToken);
        }
        return client(config);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(error);
  },
);

export const setBearerToken = (accessToken: string) => {
  client.defaults.headers.common.Authorization = setBearerPrefix(accessToken);
};

const setBearerPrefix = (accessToken: string) => {
  return `Bearer ${accessToken}`;
};
