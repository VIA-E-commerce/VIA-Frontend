import { Path, To } from 'react-router';

import { SNSProvider } from './api.response.types';

export interface NavMenuItem {
  label: string;
  to: To;
}

export type Dictionary<T> = Record<string, T>;

export interface Provider {
  code: SNSProvider;
  name: string;
  color: string;
  fontColor: string;
  logo: string;
  url: string;
}

export type AuthType = 'join' | 'login';

export interface TabItem {
  id: string;
  label: string;
  to?: To;
}

export interface RedirectLocationState {
  redirect: Path;
}
