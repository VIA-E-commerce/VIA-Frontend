import React from 'react';

import { LabelField } from '@/components';

import { Wrapper } from './DeliveryGuide.styles';

const DeliveryGuide = () => {
  return (
    <Wrapper>
      <LabelField label="배송 기간" size="large" bold>
        영업일 기준 <span>1~3일</span> 소요됩니다.
      </LabelField>
      <LabelField label="배송 업체" size="large" bold>
        우체국택배 / CJ 대한통운&nbsp;
        <small>(주소지 도착일은 평균 1~2일 정도 소요됩니다.)</small>
      </LabelField>
      <LabelField label="배송비" size="large" bold>
        3,000원 (30,000원 이상 무료배송)
      </LabelField>
      <LabelField label="출고시간" size="large" bold>
        15시까지 주문/결제 완료된 상품은 당일 출고됩니다.
      </LabelField>
      <LabelField label="배송지연" size="large" bold>
        일시품절, 배송사 물량 증가, 천재지변 등의 경우 배송이 예정 기간보다 다소
        지연될 수 있습니다.
      </LabelField>
    </Wrapper>
  );
};

export default React.memo(DeliveryGuide);
