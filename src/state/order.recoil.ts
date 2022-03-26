import { atom } from 'recoil';

export const orderPriceState = atom({
  key: 'orderPriceState',
  default: {
    totalProductPrice: 0,
    totalDiscount: 0,
    deliveryFee: 0,
    totalPrice: 0,
  },
});
