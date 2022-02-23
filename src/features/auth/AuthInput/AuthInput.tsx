import React from 'react';
import { Field } from '@/types';
import { StyledInput } from './AuthInput.styles';

interface Props {
  field: Field;
}

const AuthInput = ({ field }: Props) => {
  return (
    <div>
      <StyledInput
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
      />
    </div>
  );
};

export default AuthInput;
