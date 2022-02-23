import { HTMLInputTypeAttribute } from 'react';

export interface Provider {
  name: string;
  color: string;
  fontColor: string;
  logo: string;
  url: string;
}

export interface Field {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export interface CheckBox {
  name: string;
  label: string;
}

export type AuthType = 'join' | 'login';
