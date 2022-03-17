import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import cx from 'classnames';

import { URLS } from '@/constants';
import { useDocumentScroll } from '@/hooks';
import { headerBorderState, headerHideState } from '@/state';
import { UserSummary } from '@/types';

import { NavBar } from './NavBar';
import { UserMenu } from './UserMenu';
import {
  StyledHeader,
  HeaderInner,
  Logo as LogoWrapper,
} from './Header.styles';

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
  const [hide, setHide] = useRecoilState(headerHideState);
  const border = useRecoilValue(headerBorderState);

  const className = cx({ hide, border });

  let prevPageY = 0;
  useDocumentScroll(() => {
    const currentPageY = window.scrollY;
    setHide(currentPageY - prevPageY >= 0);
    prevPageY = currentPageY;
  }, [prevPageY]);

  return (
    <StyledHeader className={className}>
      <HeaderInner>
        <Link to={URLS.CLIENT.HOME}>
          <Logo />
        </Link>
        <NavBar />
        <UserMenu user={user} onClickLogout={onClickLogout} />
      </HeaderInner>
    </StyledHeader>
  );
};

export default memo(Header);
