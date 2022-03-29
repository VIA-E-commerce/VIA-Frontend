import React from 'react';

import { AddressInput, LabelField, PhoneInput, Input } from '@/components';
import { INPUT_OPTIONS, PAYMENT_METHOD, VALIDATION } from '@/constants';
import { useFormContext } from '@/lib';
import { UserSummary } from '@/types';

import { OrderFieldGroup } from '../OrderFieldGroup';
import { StyledForm } from './OrderForm.styles';

const FIELD_WIDTH = 280;

interface Props {
  me: UserSummary;
  totalPrice: number;
  discount: number;
}

const OrderForm = ({ me, totalPrice, discount }: Props) => {
  const { register, errors } = useFormContext();

  return (
    <StyledForm>
      <input
        type="hidden"
        value={totalPrice}
        {...register({ name: 'totalPrice' })}
      />
      <input
        type="hidden"
        value={discount}
        {...register({ name: 'discount' })}
      />
      <input
        type="hidden"
        value={PAYMENT_METHOD.ACCOUNT_TRANSFER}
        {...register({ name: 'paymentMethod' })}
      />
      <OrderFieldGroup title="주문자 정보">
        <LabelField label="이름" size="normal" required>
          <Input
            type="text"
            width={FIELD_WIDTH}
            errorMessage={errors['purchaser']}
            {...register({
              name: 'purchaser',
              defaultValue: me.name,
              validationRules: {
                required: true,
                maxLength: VALIDATION.NAME.MAX_LENGTH,
              },
            })}
          />
        </LabelField>
        <LabelField label="연락처" required>
          <PhoneInput
            name="purchaserPhone"
            defaultValue={me.phone}
            requiredMessage="주문자 연락처를 입력해주세요."
            register={register}
            errors={errors}
          />
        </LabelField>
        <LabelField label="이메일" required>
          <Input
            type="email"
            width={FIELD_WIDTH}
            errorMessage={errors['purchaserEmail']}
            {...register({
              name: 'purchaserEmail',
              defaultValue: me.email,
              validationRules: {
                required: true,
                maxLength: VALIDATION.EMAIL.MAX_LENGTH,
                pattern: INPUT_OPTIONS.EMAIL.pattern,
              },
            })}
          />
        </LabelField>
      </OrderFieldGroup>
      <OrderFieldGroup title="배송지 정보">
        <LabelField label="수령인" required>
          <Input
            type="text"
            width={FIELD_WIDTH}
            errorMessage={errors['recipient']}
            {...register({
              name: 'recipient',
              validationRules: {
                required: true,
                maxLength: VALIDATION.NAME.MAX_LENGTH,
              },
            })}
          />
        </LabelField>
        <LabelField label="수령인 연락처" required>
          <PhoneInput
            name="recipientPhone"
            register={register}
            errors={errors}
          />
        </LabelField>
        <LabelField label="주소" required>
          <AddressInput name="recipientAddress" />
        </LabelField>
        <LabelField label="배송 요청사항">
          <Input
            placeholder="50자 이내로 입력해주세요"
            type="text"
            {...register({
              name: 'message',
              validationRules: {
                maxLength: VALIDATION.ORDER.DELIVERY_MESSAGE.MAX_LENGTH,
              },
            })}
          />
        </LabelField>
      </OrderFieldGroup>
    </StyledForm>
  );
};

export default OrderForm;
