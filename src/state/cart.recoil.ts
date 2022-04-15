import { atom } from 'recoil';

import { CartItemResponse } from '@/types';

export const cartItemCountState = atom<number | undefined>({
  key: 'cartItemCountState',
  default: undefined,
});

export const selectedCartItemsState = atom({
  key: 'selectedCartItemsState',
  default: new Map<number, CartItemResponse>(),
});
