import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { StyledButton, SquareStyleProps } from './SquareButton.styles';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SquareStyleProps {
  children: ReactNode;
}

const SquareButton = ({
  variant,
  disabled,
  active,
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
      active={active}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

SquareButton.defaultProps = {
  variant: 'normal',
  size: 'normal',
};

export default memo(SquareButton);
