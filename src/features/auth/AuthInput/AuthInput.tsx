import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FormErrors } from '@/hooks';
import { StyledInput, ErrorMessage } from './AuthInput.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errors: FormErrors;
}

const AuthInput = (
  { errors, name, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) => {
  const errorMessage = name && errors[name];

  return (
    <div>
      <StyledInput ref={ref} name={name} {...rest} error={!!errorMessage} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

export default forwardRef(AuthInput);
