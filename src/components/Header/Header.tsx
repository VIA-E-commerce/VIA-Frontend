import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { UserMenu } from './UserMenu';

import { HeaderInner, Logo } from './Header.styles';
import { UserSummary } from '@/types';

interface Props {
  user?: UserSummary;
  onClickLogout: () => void;
}

const Header = ({ user, onClickLogout }: Props) => {
  return (
    <header>
      <HeaderInner>
        <Logo>
          <Link to="/">
            <img src="/images/logo.png" />
          </Link>
        </Logo>
        <NavBar />
        <UserMenu user={user} onClickLogout={onClickLogout} />
      </HeaderInner>
    </header>
  );
};

export default memo(Header);
