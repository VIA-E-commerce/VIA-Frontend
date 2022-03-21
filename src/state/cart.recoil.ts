import { atom } from 'recoil';

import { CartItemResponse } from '@/types';

export const selectedCartItemsState = atom({
  key: 'selectedCartItemsState',
  default: new Map<number, CartItemResponse>(),
});

export const billState = atom({
  key: 'billState',
  default: {
    productTotal: 0,
    discount: 0,
    delivery: 0,
    total: 0,
  },
});
