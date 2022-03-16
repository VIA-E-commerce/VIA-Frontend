import React, { memo } from 'react';
import { APP } from '@/constants';
import { FooterInner } from './Footer.styles';

const Footer = () => {
  return (
    <footer>
      <FooterInner>{APP.COPYRIGHT}</FooterInner>
    </footer>
  );
};

export default memo(Footer);
