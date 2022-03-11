import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { UserMenu } from './UserMenu';

import { HeaderInner, Logo as LogoWrapper } from './Header.styles';
import { UserSummary } from '@/types';
import { URLS } from '@/constants';

interface Props {
  user?: UserSummary;
  onClickLogout: () => void;
}

const Logo = memo(function Logo() {
  return (
    <LogoWrapper>
      <img src="/images/logo.png" />
    </LogoWrapper>
  );
});

const Header = ({ user, onClickLogout }: Props) => {
  return (
    <header>
      <HeaderInner>
        <Link to={URLS.CLIENT.HOME}>
          <Logo />
        </Link>
        <NavBar />
        <UserMenu user={user} onClickLogout={onClickLogout} />
      </HeaderInner>
    </header>
  );
};

export default memo(Header);
