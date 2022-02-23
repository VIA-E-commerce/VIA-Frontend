const getProductUrl = (category: string) => `/product?category=${category}`;

export const URLS = {
  API: {
    PREFIX: process.env.REACT_APP_API_PREFIX || '/',
    AUTH: {
      KAKAO: '/auth/kakao',
      NAVER: '/auth/naver',
    },
  },
  CLIENT: {
    HOME: '/',
    LOGIN: '/login',
    JOIN: '/join',
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
