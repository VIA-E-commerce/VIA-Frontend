import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { LabelField } from '@/components';
import { BUSINESS } from '@/constants';
import { billState, selectedCartItemsState } from '@/state';
import { formatPrice } from '@/utils';

import { Wrapper } from './CartBill.styles';

const CartBill = () => {
  const selectedCartItems = useRecoilValue(selectedCartItemsState);
  const [bill, setBill] = useRecoilState(billState);

  useMemo(() => {
    let productTotal = 0;
    let sellingPriceTotal = 0;

    selectedCartItems.forEach((item) => {
      productTotal += item.retailPrice * item.quantity;
      sellingPriceTotal += item.sellingPrice * item.quantity;
    });

    const delivery =
      sellingPriceTotal >= BUSINESS.FREE_DELIVERY ||
      selectedCartItems.size === 0
        ? 0
        : BUSINESS.DELIVERY_FEE;

    const total = sellingPriceTotal + delivery;

    setBill({
      productTotal,
      discount: productTotal - sellingPriceTotal,
      delivery,
      total,
    });
  }, [selectedCartItems.size]);

  const { productTotal, discount, delivery, total } = bill;

  return (
    <Wrapper>
      <div>
        <LabelField label="총 상품 금액" contentAlign="right">
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
        <LabelField label="총 주문 금액" size="large" contentAlign="right">
          <b>{formatPrice(total)}원</b>
        </LabelField>
      </div>
    </Wrapper>
  );
};

export default CartBill;
