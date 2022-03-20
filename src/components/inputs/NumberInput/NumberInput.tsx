import React, { memo } from 'react';

import {
  Wrapper,
  StyledInput,
  PlusMinusButton,
  NumberInputSizeType,
} from './NumberInput.styles';

interface NumberInputProps {
  size: NumberInputSizeType;
  name: string;
  value: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  onClickSpinButton: (value: number) => void;
}

const NumberInput = ({
  size,
  name,
  value,
  min,
  max,
  onClickSpinButton,
  disabled,
  ...rest
}: NumberInputProps) => {
  return (
    <Wrapper size={size}>
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

NumberInput.defaultProps = {
  size: 'normal',
};

export default memo(NumberInput);
