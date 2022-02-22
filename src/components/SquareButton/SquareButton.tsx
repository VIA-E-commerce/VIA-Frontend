import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { StyledButton } from './SquareButton.styles';

export type ButtonVariant = 'primary' | 'outline';
export type ButtonGrid = {
  colNum: number;
  span: number;
};
export type ButtonSize = 'small' | 'normal';

export interface SquareButtonStyleProps {
  wide?: boolean;
  variant: ButtonVariant;
  disabled?: boolean;
  grid?: ButtonGrid;
  size: ButtonSize;
}

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SquareButtonStyleProps {
  children: ReactNode;
}

const SquareButton = ({
  variant,
  disabled,
  size,
  children,
  ...rest
}: Props) => {
  const buttonVariant = variant;
  return (
    <StyledButton
      variant={buttonVariant}
      size={size}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

SquareButton.defaultProps = {
  variant: 'primary',
  size: 'normal',
};

export default memo(SquareButton);
