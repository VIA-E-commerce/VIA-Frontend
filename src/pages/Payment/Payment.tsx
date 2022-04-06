import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import {
  GridSection,
  LabelField,
  LabelSection,
  SquareButton,
  Loading,
} from '@/components';
import { URLS } from '@/constants';
import { CategoryTitle } from '@/features/productList';
import { useFetchOrder } from '@/features/order';
import { formatDate, formatPhone, formatPrice } from '@/utils';

import { Wrapper, BottomMenu } from './Payment.styles';

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = Number(searchParams.get(URLS.PARAM.ORDER));

  const { data: order } = useFetchOrder(orderId);

  // 이벤트 핸들러
  const handleClickHome = useCallback(() => {
    navigate(URLS.CLIENT.HOME);
  }, []);

  if (!order) return <Loading />;

  return (
    <Wrapper>
      <GridSection cols={1}>
        <CategoryTitle title="Receipt" />
      </GridSection>

      <LabelSection label="주문자 정보">
        <LabelField label="주문자" contentAlign="right">
          {order.purchaser}
        </LabelField>
        <LabelField label="주문자 연락처" contentAlign="right">
          {formatPhone(order.purchaserPhone)}
        </LabelField>
        <LabelField label="이메일" contentAlign="right">
          {order.purchaserEmail}
        </LabelField>
      </LabelSection>

      <LabelSection label="결제 정보">
        <LabelField label="주문일자" contentAlign="right">
          {formatDate(order.createdAt)}
        </LabelField>
        <LabelField label="총 상품 금액" contentAlign="right">
          {formatPrice(order.totalPrice, { unit: true })}
        </LabelField>
        <LabelField label="할인 금액" contentAlign="right" className="discount">
          -{formatPrice(order.totalPrice - order.paymentReal, { unit: true })}
        </LabelField>
        <LabelField
          label="결제금액"
          contentAlign="right"
          className="paymentReal"
        >
          {formatPrice(order.paymentReal, { unit: true })}
        </LabelField>
        <LabelField label="결제수단" contentAlign="right">
          {order.paymentMethod}
        </LabelField>
        <LabelField label="주문 상태" contentAlign="right">
          {order.status}
        </LabelField>
      </LabelSection>

      <LabelSection label="배송 정보">
        <LabelField label="수령인" contentAlign="right">
          {order.recipient}
        </LabelField>
        <LabelField label="수령인 연락처" contentAlign="right">
          {formatPhone(order.recipientPhone)}
        </LabelField>
        <LabelField label="주소" contentAlign="right">
          ({order.postalCode}) {order.shippingAddress}
        </LabelField>
        <LabelField label="배송 요청사항" contentAlign="right">
          {order.message}
        </LabelField>
      </LabelSection>

      <GridSection cols={1}>
        <BottomMenu>
          <SquareButton onClick={handleClickHome}>홈으로</SquareButton>
        </BottomMenu>
      </GridSection>
    </Wrapper>
  );
};

export default Payment;
