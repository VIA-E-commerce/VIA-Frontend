import React, { memo } from 'react';
import { FaGithubSquare } from 'react-icons/fa';

import { APP } from '@/constants';

import { StyledFooter, FooterInner, RightMenu } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <div>{APP.COPYRIGHT}</div>
        <RightMenu>
          <a target="_blank" href={APP.GITHUB_URL} rel="noreferrer noopener">
            <FaGithubSquare />
          </a>
        </RightMenu>
      </FooterInner>
    </StyledFooter>
  );
};

export default memo(Footer);
