import React from 'react';
import { CheckBox } from '@/types';
import {
  Wrapper,
  CheckBox as StyledCheckBox,
  Label,
} from './AuthCheckBox.styles';

interface Props {
  checkBox: CheckBox;
}

const AuthCheckBox = ({ checkBox }: Props) => {
  return (
    <Wrapper>
      <StyledCheckBox type="checkbox" name={checkBox.name} />
      <Label>{checkBox.label}</Label>
    </Wrapper>
  );
};

export default AuthCheckBox;
