import React, { memo, ReactNode } from 'react';
import { StyledSection } from './AuthSection.styles';

interface Props {
  children: ReactNode;
}

const AuthSection = ({ children }: Props) => {
  return <StyledSection>{children}</StyledSection>;
};

export default memo(AuthSection);
