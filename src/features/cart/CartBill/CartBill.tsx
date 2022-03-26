import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { LabelField } from '@/components';
import { BUSINESS } from '@/constants';
import { selectedCartItemsState } from '@/state';
import { formatPrice } from '@/utils';

import { Wrapper } from './CartBill.styles';

const CartBill = () => {
  const selectedCartItems = useRecoilValue(selectedCartItemsState);

  const { productTotal, discount, delivery, total } = useMemo(() => {
    let newProductTotal = 0;
    let sellingPriceTotal = 0;

    selectedCartItems.forEach((item) => {
      newProductTotal += item.retailPrice * item.quantity;
      sellingPriceTotal += item.sellingPrice * item.quantity;
    });

    const newDelivery =
      sellingPriceTotal >= BUSINESS.FREE_DELIVERY ||
      selectedCartItems.size === 0
        ? 0
        : BUSINESS.DELIVERY_FEE;

    const newTotal = sellingPriceTotal + newDelivery;

    return {
      productTotal: newProductTotal,
      discount: newProductTotal - sellingPriceTotal,
      delivery: newDelivery,
      total: newTotal,
    };
  }, [selectedCartItems]);

  return (
    <Wrapper>
      <div>
        <LabelField label="총 상품금액" contentAlign="right">
          {formatPrice(productTotal)}원
        </LabelField>
        <LabelField label="총 할인금액" contentAlign="right">
          - {formatPrice(discount)}원
        </LabelField>
        <LabelField label="배송비" contentAlign="right">
          {formatPrice(delivery)}원
        </LabelField>
      </div>
      <div>
        <LabelField label="총 주문금액" size="large" contentAlign="right">
          <b>{formatPrice(total)}원</b>
        </LabelField>
      </div>
    </Wrapper>
  );
};

export default CartBill;
