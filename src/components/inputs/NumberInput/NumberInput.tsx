import React, { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';

import { Wrapper, StyledInput, PlusMinusButton } from './NumberInput.styles';

interface NumberInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  value: number;
  min?: number;
  max?: number;
  onClickSpinButton: (value: number) => void;
}

const NumberInput = ({
  name,
  value,
  min,
  max,
  onClickSpinButton,
  disabled,
  ...rest
}: NumberInputProps) => {
  return (
    <Wrapper>
      <PlusMinusButton
        disabled={disabled}
        onClick={() => onClickSpinButton(-1)}
      >
        -
      </PlusMinusButton>
      <StyledInput
        {...rest}
        type="number"
        name={name}
        value={value}
        min={min}
        max={max}
        readOnly={disabled}
      />
      <PlusMinusButton disabled={disabled} onClick={() => onClickSpinButton(1)}>
        +
      </PlusMinusButton>
    </Wrapper>
  );
};

export default memo(NumberInput);
