import React, { InputHTMLAttributes, memo } from 'react';

import { SquareStyleProps } from '../../buttons/SquareButton/SquareButton.styles';
import { StyledInput, Label } from './SquareInput.styles';

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    SquareStyleProps {
  size: any;
  label: string;
}

const SquareInput = ({
  id,
  variant,
  disabled,
  size,
  label,
  style,
  ...rest
}: Props) => {
  return (
    <>
      <StyledInput id={id} type="radio" disabled={disabled} {...rest} />
      <Label
        htmlFor={id}
        variant={variant}
        size={size}
        disabled={disabled}
        style={style}
      >
        {label}
      </Label>
    </>
  );
};

SquareInput.defaultProps = {
  size: 'normal',
};

export default memo(SquareInput);
