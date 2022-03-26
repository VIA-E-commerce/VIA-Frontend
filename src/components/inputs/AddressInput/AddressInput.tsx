import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useFormContext } from '@/lib';
import {
  addressModalState,
  addressInputState,
  AddressInputState,
} from '@/state';

import { SquareButton } from '@/components/buttons';
import { Input } from '../Input';

import { Wrapper, PostalCodeSearch } from './AddressInput.styles';

interface AddressInputProps {
  name: string;
}

const AddressInput = ({ name }: AddressInputProps) => {
  const { register, errors } = useFormContext();
  const { postalCode, address } =
    useRecoilValue<AddressInputState>(addressInputState);
  const setAddressModalState = useSetRecoilState(addressModalState);

  const [postalCodeName, addressName, addressDetailName] = [
    `${name}PostalCode`,
    name,
    `${name}Detail`,
  ];

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setAddressModalState((prev) => ({ ...prev, show: true }));
  };

  return (
    <Wrapper>
      <PostalCodeSearch>
        <Input
          width={160}
          readOnly
          errorMessage={errors[postalCodeName]}
          {...register({
            name: postalCodeName,
            defaultValue: postalCode,
            placeholder: '우편번호',
            validationRules: {
              required: true,
            },
          })}
        />
        <SquareButton size="small" onClick={handleClick}>
          주소 검색
        </SquareButton>
      </PostalCodeSearch>
      <Input
        readOnly
        errorMessage={errors[addressName]}
        {...register({
          name: addressName,
          defaultValue: address,
          placeholder: '주소',
          validationRules: {
            required: true,
          },
        })}
      />
      <Input
        errorMessage={errors[addressDetailName]}
        {...register({
          name: addressDetailName,
          placeholder: '상세주소',
        })}
      />
    </Wrapper>
  );
};

export default AddressInput;
