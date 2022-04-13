import React from 'react';

import { REGEXP, VALIDATION } from '@/constants';
import { FieldErrors, FieldRegister } from '@/lib';

import { Select } from '../Select';
import { Input } from '../Input';
import { Wrapper } from './PhoneInput.styles';

interface PhoneInputProps {
  name: string;
  defaultValue?: string;
  register: FieldRegister;
  errors: FieldErrors;
}

const networkCodes = ['010', '011', '016', '017', '018', '019'];

const PhoneInput = ({
  name,
  defaultValue = '010',
  register,
  errors,
}: PhoneInputProps) => {
  const [defaultPhone1, defaultPhone2] = [
    defaultValue?.substring(0, 3),
    defaultValue?.substring(3),
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
          defaultValue={defaultPhone1}
          {...register({
            name: `${name}1`,
          })}
        >
          {networkCodes.map((code) => (
            <option key={code} value={code} selected={code === defaultPhone1}>
              {code}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Input
          type="tel"
          onKeyPress={handleKeyDown}
          errorMessage={errors[`${name}2`]}
          {...register({
            name: `${name}2`,
            defaultValue: defaultPhone2,
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
