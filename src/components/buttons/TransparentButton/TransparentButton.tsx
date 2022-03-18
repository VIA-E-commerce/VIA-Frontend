import React from 'react';

import { StyledButton } from './TransparentButton.styles';

const TransparentButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default React.memo(TransparentButton);
