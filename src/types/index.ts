export interface Provider {
  name: string;
  color: string;
  fontColor: string;
  logo: string;
  url: string;
}

export type AuthType = 'join' | 'login';
