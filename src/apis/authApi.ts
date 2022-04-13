import { client } from '@/apis';
import { URLS } from '@/constants';
import { JoinForm, LoginForm, LoginResponse } from '@/types';

export const join = async (joinForm: JoinForm) =>
  client.post(URLS.API.AUTH.JOIN, joinForm);

export const login = async (loginForm: LoginForm) =>
  client.post<LoginResponse>(URLS.API.AUTH.LOGIN, loginForm);

export const logout = async () => client.post(URLS.API.AUTH.LOGOUT);

export const deleteAccount = async () => client.delete(URLS.API.AUTH.LOCAL);
