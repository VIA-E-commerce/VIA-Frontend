import { Dictionary } from '@/types';

export const URLS = {
  API: {
    PREFIX: process.env.REACT_APP_API_PREFIX || '/',
    AUTH: {
      JOIN: '/auth/join',
      LOGIN: '/auth/login',
      LOGOUT: '/auth/logout',
      KAKAO: '/auth/kakao',
      NAVER: '/auth/naver',
      REFRESH: '/auth/refresh',
    },
    PRODUCT: {
      LIST: '/products',
    },
    USER: {
      ME: '/users/me',
    },
  },
  CLIENT: {
    HOME: '/',
    LOGIN: '/login',
    JOIN: '/join',
    OAUTH: '/oauth',
    CATEGORY: '/category',
  },
  PARAM: {
    CATEGORY: 'category',
    SORT: 'sort',
    PAGE: 'page',
  },
};

export const APP = {
  SITE_NAME: 'VIA',
  COPYRIGHT: '© 2022 Kyeongho Yang. All rights reserved.',
};

export const QUERY = {
  AUTH: {
    ME: 'me',
  },
  PRODUCT: {
    LIST: 'product-list',
  },
};

export const CATEGORY: Dictionary<string> = {
  new: 'NEW',
  sale: 'SALE',
  outer: 'OUTER',
  top: 'TOP',
  bottom: 'BOTTOM',
  ['bag-acc']: 'BAG/ACC',
};
