import axios from 'axios';
import { URLS } from '@/constants';

export const client = axios.create({
  baseURL: URLS.API.PREFIX,
  withCredentials: true,
});

export const setBearerToken = (accessToken: string) => {
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export * from './authApi';
export * from './userApi';
