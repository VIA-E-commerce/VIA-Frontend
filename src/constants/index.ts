const getProductUrl = (category: string) => `/product?category=${category}`;

export const URLS = {
  API: {
    PREFIX: process.env.REACT_APP_API_PREFIX || '/',
    AUTH: {
      JOIN: '/auth/join',
      LOGIN: '/auth/login',
      KAKAO: '/auth/kakao',
      NAVER: '/auth/naver',
      REFRESH: '/auth/refresh',
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
    PRODUCT: {
      NEW: getProductUrl('new'),
      SALE: getProductUrl('sale'),
      OUTER: getProductUrl('outer'),
      TOP: getProductUrl('top'),
      BOTTOM: getProductUrl('bottom'),
      BAG_ACC: getProductUrl('bag-acc'),
    },
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
};
