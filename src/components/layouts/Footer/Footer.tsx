import React, { memo } from 'react';

import { APP } from '@/constants';

import { StyledFooter, FooterInner, RightMenu } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <div>{APP.COPYRIGHT}</div>
        <RightMenu>
          <a target="_blank" href={APP.GITHUB_URL} rel="noreferrer noopener">
            <img src="/images/github-icon.png" alt="VIA GitHub" />
          </a>
        </RightMenu>
      </FooterInner>
    </StyledFooter>
  );
};

export default memo(Footer);
