import React, { useMemo } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';

import { GridSection } from '@/components';
import { URLS } from '@/constants';
import { AddressModal } from '@/features/address';
import { useMe } from '@/features/auth';
import {
  OrderAside,
  OrderForm,
  OrderItemInfoTable,
  useOrderCartItems,
  useCreateOrderMutation,
  useOrderPriceInfo,
} from '@/features/order';
import { FormProvider, useForm } from '@/lib';
import { RawOrderForm } from '@/types';

import { OrderHeader, OrderBody } from './Order.styles';

const Order = () => {
  const [searchParams] = useSearchParams();
  const cartItemIds = searchParams.getAll(URLS.PARAM.CART_ITEM_ID).map(Number);

  // 주문 상품이 없으면 뒤로 가기
  if (cartItemIds.length === 0) {
    alert('주문 상품이 없습니다.');
    return <Navigate to={URLS.CLIENT.HOME} />;
  }

  const { data: userData } = useMe();
  const { data: cartItems } = useOrderCartItems(cartItemIds);
  const { onSubmit: onSubmitOrderForm } = useCreateOrderMutation({ cartItems });
  const { handleSubmit, ...rest } = useForm<RawOrderForm>();

  const priceInfo = useOrderPriceInfo({ cartItems });

  const onSubmit = useMemo(() => handleSubmit(onSubmitOrderForm), [cartItems]);

  if (!userData || !cartItems)
    return <GridSection cols={1}>로딩 중</GridSection>;

  return (
    <>
      <GridSection>
        <OrderHeader>
          <h1>상품 정보</h1>
          <OrderItemInfoTable cartItems={cartItems} />
        </OrderHeader>
        <OrderBody>
          <FormProvider handleSubmit={handleSubmit} {...rest}>
            <OrderForm
              me={userData}
              totalPrice={priceInfo.totalPrice}
              discount={priceInfo.totalDiscount}
            />
          </FormProvider>
        </OrderBody>
        <OrderAside {...priceInfo} onSubmit={onSubmit} />
      </GridSection>

      <AddressModal />
    </>
  );
};

export default Order;
