export const URLS = {
  API: {
    PREFIX: '/api',
    AUTH: {
      JOIN: '/auth/join',
      LOGIN: '/auth/login',
      LOGOUT: '/auth/logout',
      LOCAL: '/auth/local',
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
      MY_WISHLIST: '/users/me/wishlist',
      MY_QUESTIONS: '/users/me/questions',
      MY_REVIEWS: '/users/me/reviews',
      PURCHASED_PRODUCTS: '/users/me/products',
    },
    CART: {
      ITEM: '/cart-items',
      COUNT: '/cart-items/count',
    },
    ORDER: {
      CRUD: '/orders',
      ME: '/orders/me',
      CANCEL: '/orders/:orderId/cancel',
    },
    PAYMENT: {
      REFUND: '/payments/refund',
    },
    QUESTION: {
      CRUD: '/questions',
    },
    REVIEW: {
      CRUD: '/reviews',
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
    WISHLIST: '/wishlist',
    MY_PAGE: {
      INDEX: '/mypage',
      TABS: {
        PROFILE: 'profile',
        ORDERS: 'orders',
        REVIEWS: 'reviews',
        QUESTIONS: 'questions',
      },
      REVIEW_TABS: {
        LIST: 'list',
        WRITE: 'write',
      },
      get PROFILE_TAB() {
        return `${this.INDEX}/${this.TABS.PROFILE}`;
      },
    },
  },
  PARAM: {
    CATEGORY: 'category',
    SORT: 'sort',
    PAGE: 'page',
    CART_ITEM_ID: 'cart-item-id',
    ORDER: 'order',
  },
};
