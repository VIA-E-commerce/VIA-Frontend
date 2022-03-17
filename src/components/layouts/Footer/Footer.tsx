import React, { memo } from 'react';
import { APP } from '@/constants';
import { StyledFooter, FooterInner } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>{APP.COPYRIGHT}</FooterInner>
    </StyledFooter>
  );
};

export default memo(Footer);
