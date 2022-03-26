import React, { memo } from 'react';

import { LabelField, SquareButton } from '@/components';
import { SubmitHandler } from '@/lib';
import { formatPrice } from '@/utils';

import { StyledAside, Wrapper } from './OrderAside.styles';

interface Props {
  totalProductPrice: number;
  totalDiscount: number;
  deliveryFee: number;
  totalPrice: number;
  onSubmit: SubmitHandler<any>;
}

const OrderAside = ({
  totalProductPrice,
  totalDiscount,
  deliveryFee,
  totalPrice,
  onSubmit,
}: Props) => {
  return (
    <StyledAside>
      <div>
        <Wrapper>
          <div>
            <LabelField label="총 상품금액" size="large" contentAlign="right">
              {formatPrice(totalProductPrice)}원
            </LabelField>
            <LabelField label="총 할인금액" size="large" contentAlign="right">
              - {formatPrice(totalDiscount)}원
            </LabelField>
            <LabelField label="배송비" size="large" contentAlign="right">
              {formatPrice(deliveryFee)}원
            </LabelField>
          </div>
          <div>
            <LabelField label="총 결제금액" size="large" contentAlign="right">
              <span className="total-price">
                <b>{formatPrice(totalPrice)}</b> 원
              </span>
            </LabelField>
          </div>
        </Wrapper>
        <SquareButton wide onClick={onSubmit}>
          결제하기
        </SquareButton>
      </div>
    </StyledAside>
  );
};

export default memo(OrderAside);
