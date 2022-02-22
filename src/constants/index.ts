const getProductUrl = (category: string) => `/product?category=${category}`;

export const URLS = {
  API: {
    PREFIX: process.env.REACT_APP_API_PREFIX || '/',
  },
  CLIENT: {
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
