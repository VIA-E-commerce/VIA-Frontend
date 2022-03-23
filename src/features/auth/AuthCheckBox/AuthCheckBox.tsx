import React, { forwardRef } from 'react';
import {
  Wrapper,
  CheckBox as StyledCheckBox,
  Label,
} from './AuthCheckBox.styles';

interface Props {
  label: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
}

const AuthCheckBox = forwardRef<HTMLInputElement, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <Wrapper>
        <StyledCheckBox ref={ref} type="checkbox" {...rest} />
        <Label>{label}</Label>
      </Wrapper>
    );
  },
);
AuthCheckBox.displayName = 'AuthCheckBox';

export default AuthCheckBox;
