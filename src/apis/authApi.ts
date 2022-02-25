import { client } from '@/apis';
import { URLS } from '@/constants';
import { JoinForm, LoginForm } from '@/types';

export const join = async (joinForm: JoinForm) =>
  client.post(URLS.API.AUTH.JOIN, joinForm);

export const login = async (loginForm: LoginForm) =>
  client.post(URLS.API.AUTH.LOGIN, loginForm);

export const logout = async () => client.post(URLS.API.AUTH.LOGOUT);
