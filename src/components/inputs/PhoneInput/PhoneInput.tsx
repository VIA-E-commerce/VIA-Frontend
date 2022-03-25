import React from 'react';

import { REGEXP, VALIDATION } from '@/constants';
import { useFormContext } from '@/lib';

import { Select } from '../Select';
import { Input } from '../Input';
import { Wrapper } from './PhoneInput.styles';

interface PhoneInputProps {
  name: string;
  defaultValue?: string;
}

const PhoneInput = ({ name, defaultValue = '010' }: PhoneInputProps) => {
  const { register, errors } = useFormContext();

  const [default1, default2] = [
    defaultValue.substring(0, 2),
    defaultValue.substring(3),
  ];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (REGEXP.NUMBER.test(key)) return;

    event.preventDefault();
  };

  return (
    <Wrapper>
      <div className="phone1">
        <Select
          defaultValue={default1}
          {...register({
            name: `${name}1`,
          })}
        >
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
          <option value="019">019</option>
        </Select>
      </div>
      <div>
        <Input
          type="tel"
          onKeyPress={handleKeyDown}
          errorMessage={errors[`${name}2`]}
          {...register({
            name: `${name}2`,
            defaultValue: default2,
            validationRules: {
              required: true,
              minLength: VALIDATION.PHONE.MIN_LENGTH,
              maxLength: VALIDATION.PHONE.MAX_LENGTH,
            },
          })}
        />
      </div>
    </Wrapper>
  );
};

PhoneInput.defaultProps = {
  requiredMessage: '연락처를 입력해주세요.',
};

export default PhoneInput;
