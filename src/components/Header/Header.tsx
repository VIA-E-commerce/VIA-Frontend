import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { UserMenu } from './UserMenu';

import { HeaderInner, Logo } from './Header.styles';

const Header = () => {
  return (
    <header>
      <HeaderInner>
        <Logo>
          <Link to="/">
            <img src="/images/logo.png" />
          </Link>
        </Logo>
        <NavBar />
        <UserMenu />
      </HeaderInner>
    </header>
  );
};

export default memo(Header);
