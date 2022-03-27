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
      WISHLIST: '/products/:productId/wishlist',
    },
    USER: {
      ME: '/users/me',
    },
    CART: {
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
    ORDER: '/order',
    PAYMENT: '/payment',
  },
  PARAM: {
    CATEGORY: 'category',
    SORT: 'sort',
    PAGE: 'page',
    CART_ITEM_ID: 'cart-item-id',
    ORDER: 'order',
  },
};
