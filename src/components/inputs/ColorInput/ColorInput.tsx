import React, { InputHTMLAttributes, memo } from 'react';

import { Label, LabelStyleProps, StyledInput } from './ColorInput.styles';

interface ColorInputProps
  extends LabelStyleProps,
    InputHTMLAttributes<HTMLInputElement> {}

const ColorInput = ({ id, hexCode, disabled, ...rest }: ColorInputProps) => {
  return (
    <>
      <StyledInput {...rest} id={id} type="radio" disabled={disabled} />
      <Label htmlFor={id} hexCode={hexCode} disabled={disabled}>
        <span className="sold-out">품절</span>
      </Label>
    </>
  );
};

export default memo(ColorInput);
