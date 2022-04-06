import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';

import { LabelField } from '@/components';
import { URLS } from '@/constants';
import { OrderResponse } from '@/types';
import { formatDate, formatPrice } from '@/utils';

import { Wrapper, Header } from './MyOrderItem.styles';

interface Props {
  order: OrderResponse;
}

const MyOrderItem = ({ order }: Props) => {
  const searchParams = new URLSearchParams();
  searchParams.set(URLS.PARAM.ORDER, order.id.toString());

  const search = searchParams.toString();

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
      <div>
        <LabelField label="주문상태">{order.status}</LabelField>
        <LabelField label="총 결제금액">
          {formatPrice(order.paymentReal)}원
        </LabelField>
        <LabelField label="결제수단">{order.paymentMethod}</LabelField>
      </div>
    </Wrapper>
  );
};

export default React.memo(MyOrderItem);
