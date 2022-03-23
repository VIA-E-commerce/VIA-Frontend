import { Path, To } from 'react-router';

export interface NavMenuItem {
  label: string;
  to: To;
}

export type Dictionary<T> = Record<string, T>;

export interface Provider {
  name: string;
  color: string;
  fontColor: string;
  logo: string;
  url: string;
}

export type AuthType = 'join' | 'login';

export interface ProductDetailTabItem {
  id: string;
  label: string;
}

export interface RedirectLocationState {
  redirect: Path;
}
