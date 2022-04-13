import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';

import { LabelField, SquareButton } from '@/components';
import { URLS } from '@/constants';
import { useCancelOrder } from '@/features/order';
import { OrderResponse } from '@/types';
import { formatDate, formatPrice } from '@/utils';

import { Wrapper, Header, Body, BodyRightMenu } from './MyOrderItem.styles';

interface Props {
  order: OrderResponse;
}

const MyOrderItem = ({ order }: Props) => {
  const searchParams = new URLSearchParams();
  searchParams.set(URLS.PARAM.ORDER, order.id.toString());

  const search = searchParams.toString();

  // 주문 취소
  const canCancel =
    order.status === '입금 대기' || order.status === '입금 확인';

  const { mutate: cancelMutate } = useCancelOrder();

  const handleClickCancel = useCallback(() => {
    if (confirm('정말 취소하시겠습니까?')) {
      cancelMutate(order.id);
    }
  }, [order.id]);

  return (
    <Wrapper>
      <Header>
        <div>
          {order.id} | {formatDate(order.createdAt)}
        </div>
        <div className="right-menu">
          <Link to={{ pathname: URLS.CLIENT.PAYMENT, search }}>
            상세보기
            <MdChevronRight />
          </Link>
        </div>
      </Header>
      <Body>
        <div>
          <LabelField label="주문상태">{order.status}</LabelField>
          <LabelField label="총 결제금액">
            {formatPrice(order.paymentReal)}원
          </LabelField>
          <LabelField label="결제수단">{order.paymentMethod}</LabelField>
        </div>
        <BodyRightMenu>
          {canCancel && (
            <SquareButton
              size="small"
              variant="error-outline"
              onClick={handleClickCancel}
            >
              주문 취소
            </SquareButton>
          )}
        </BodyRightMenu>
      </Body>
    </Wrapper>
  );
};

export default React.memo(MyOrderItem);
