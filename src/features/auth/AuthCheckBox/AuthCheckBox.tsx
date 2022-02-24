import React, { forwardRef, Ref } from 'react';
import {
  Wrapper,
  CheckBox as StyledCheckBox,
  Label,
} from './AuthCheckBox.styles';

interface Props {
  label: string;
}

const AuthCheckBox = (
  { label, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <Wrapper>
      <StyledCheckBox ref={ref} type="checkbox" {...rest} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default forwardRef(AuthCheckBox);
