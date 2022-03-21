import { atom } from 'recoil';

import { CartItemResponse } from '@/types';

export const selectedCartItemsState = atom({
  key: 'selectedCartItemsState',
  default: new Map<number, CartItemResponse>(),
});
