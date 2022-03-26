import React, { forwardRef } from 'react';

import {
  WrapperStyleProps,
  Wrapper,
  StyledInput,
  ErrorMessage,
} from './Input.styles';

interface InputProps extends WrapperStyleProps {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: any;
  placeholder?: string;
  readOnly?: boolean;
  width?: number;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, width, errorMessage, ...rest }, ref) => {
    return (
      <Wrapper width={width}>
        <StyledInput
          ref={ref}
          name={name}
          type={type}
          error={errorMessage !== undefined}
          {...rest}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Wrapper>
    );
  },
);

Input.displayName = 'Input';
Input.defaultProps = {
  type: 'text',
};

export default React.memo(Input);
