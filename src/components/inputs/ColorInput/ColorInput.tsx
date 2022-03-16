import React, { InputHTMLAttributes, memo } from 'react';

import { Label, LabelStyleProps, StyledInput } from './ColorInput.styles';

interface ColorInputProps
  extends LabelStyleProps,
    InputHTMLAttributes<HTMLInputElement> {}

const ColorInput = ({ id, hexCode, ...rest }: ColorInputProps) => {
  return (
    <>
      <StyledInput {...rest} id={id} type="radio" />
      <Label htmlFor={id} hexCode={hexCode} />
    </>
  );
};

export default memo(ColorInput);
