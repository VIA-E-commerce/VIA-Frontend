import { Dictionary } from '@/types';

export * from './validation';

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
      CRUD: '/products',
      REVIEWS: '/products/:productId/reviews',
      QUESTIONS: '/products/:productId/questions',
    },
    USER: {
      ME: '/users/me',
    },
    CART: {
      ME: '/carts/me',
      ITEM: '/cart-items',
    },
    ORDER: {
      CRUD: '/orders',
    },
  },
  CLIENT: {
    HOME: '/',
    LOGIN: '/login',
    JOIN: '/join',
    OAUTH: '/oauth',
    CATEGORY: '/category',
    PRODUCT: '/product',
    CART: '/cart',
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

export const BUSINESS = {
  POINT_EARNING_RATE: 0.01,
  FREE_DELIVERY: 30000,
  DELIVERY_FEE: 3000,
};

export const QUERY = {
  AUTH: {
    ME: 'me',
  },
  PRODUCT: {
    LIST: 'product-list',
    DETAIL: 'product-detail',
    REVIEWS: 'product-reviews',
    QUESTIONS: 'product-questions',
  },
  CART: {
    MINE: 'my-cart',
  },
};

export const LOCAL_STORAGE = {
  REDIRECT: 'redirect',
};

export const CATEGORY: Dictionary<string> = {
  new: 'NEW',
  sale: 'SALE',
  outer: 'OUTER',
  top: 'TOP',
  bottom: 'BOTTOM',
  ['bag-acc']: 'BAG/ACC',
};

export const PAYMENT_METHOD = {
  BACS: 'BACS', // 무통장입금
  ACCOUNT_TRANSFER: 'ACCOUNT_TRANSFER', // 실시간 계좌이체
  PHONE_BANKING: 'PHONE_BANKING', // 휴대폰 결제
  PAYCO: 'PAYCO', // 페이코
  SAMSUNG_PAY: 'SAMSUNG_PAY', // 삼성페이
  NAVER_PAY: 'NAVER_PAY', // 네이버페이
  KAKAO_PAY: 'KAKAO_PAY', // 카카오페이
};
