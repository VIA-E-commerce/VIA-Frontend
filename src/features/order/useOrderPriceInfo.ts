import { useMemo } from 'react';

import { BUSINESS } from '@/constants';
import { CartItemResponse } from '@/types';

interface Props {
  cartItems?: CartItemResponse[];
}

export const useOrderPriceInfo = ({ cartItems }: Props) => {
  return useMemo(() => {
    let totalProductPrice = 0;
    let totalDiscount = 0;
    let deliveryFee = BUSINESS.DELIVERY_FEE;
    let totalPrice = 0;

    if (cartItems) {
      totalProductPrice = cartItems.reduce(
        (sum, item) =>
          sum + (item.retailPrice || item.sellingPrice) * item.quantity,
        0,
      );

      const totalSellingPrice = cartItems.reduce(
        (sum, item) => sum + item.sellingPrice * item.quantity,
        0,
      );

      totalDiscount = totalProductPrice - totalSellingPrice;

      deliveryFee =
        totalSellingPrice >= BUSINESS.FREE_DELIVERY ? 0 : BUSINESS.DELIVERY_FEE;

      totalPrice = totalProductPrice - totalDiscount + deliveryFee;
    }

    return {
      totalProductPrice,
      totalDiscount,
      deliveryFee,
      totalPrice,
    };
  }, [cartItems]);
};
