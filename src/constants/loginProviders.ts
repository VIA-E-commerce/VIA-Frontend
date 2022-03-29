import { Provider } from '@/types';

import { URLS } from './urls';

export const LOGIN_PROVIDERS: Provider[] = [
  {
    code: 'KAKAO',
    name: '카카오',
    color: '#FEE500',
    fontColor: '#000000',
    logo: '/images/kakao-logo.png',
    url: `${URLS.API.PREFIX}${URLS.API.AUTH.KAKAO}`,
  },
  {
    code: 'NAVER',
    name: '네이버',
    color: '#03C75A',
    fontColor: '#FFFFFF',
    logo: '/images/naver-logo.png',
    url: `${URLS.API.PREFIX}${URLS.API.AUTH.NAVER}`,
  },
];
