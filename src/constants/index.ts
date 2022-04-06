import { Dictionary } from '@/types';

export * from './loginProviders';
export * from './urls';
export * from './validation';

export const APP = {
  SITE_NAME: 'VIA',
  COPYRIGHT: '© 2022 Kyeongho Yang. All rights reserved.',

  KAKAO_JS_KEY: process.env.REACT_APP_KAKAO_JS_KEY,
};

export const BUSINESS = {
  IMP_MERCHANT_ID: process.env.REACT_APP_IMP_MERCHANT_ID,
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
  ORDER: {
    INFO: 'order-info',
    ITEMS: 'order-items',
    MINE: 'my-orders',
  },
  WISHLIST: 'wishlist',
  USER: {
    MY_QUESTIONS: 'my-questions',
    MY_REVIEWS: 'my-reviews',
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

export const ORDER_STATUS = {
  AWAITING_PAYMENT: 'AWAITING_PAYMENT', // 입금대기
  PAYMENT_ACCEPTED: 'PAYMENT_ACCEPTED', // 입금확인
  AWAITING_SHIPMENT: 'AWAITING_SHIPMENT', // 배송준비중
  SHIPPED: 'SHIPPED', // 배송중
  DELIVERED: 'DELIVERED', // 배송완료
  CANCELLED: 'CANCELLED', // 주문 취소
  EXCHANGED: 'EXCHANGED', // 교환
  REFUNDED: 'REFUNDED', // 환불
} as const;

export const PAYMENT_METHOD = {
  BACS: 'BACS', // 무통장입금
  ACCOUNT_TRANSFER: 'ACCOUNT_TRANSFER', // 실시간 계좌이체
  PHONE_BANKING: 'PHONE_BANKING', // 휴대폰 결제
  PAYCO: 'PAYCO', // 페이코
  SAMSUNG_PAY: 'SAMSUNG_PAY', // 삼성페이
  NAVER_PAY: 'NAVER_PAY', // 네이버페이
  KAKAO_PAY: 'KAKAO_PAY', // 카카오페이
};

export const DATE_FORMAT = {
  KOR_DATE_TIME: 'YYYY년 M월 D일 HH시 mm분',
};
