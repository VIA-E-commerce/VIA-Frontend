import React, { memo, ReactNode } from 'react';

import { UserSummary } from '@/types';

import { QuickScroll } from '../../scroll';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Wrapper, Main } from './Layout.styles';

interface Props {
  user?: UserSummary;
  onClickLogout: () => void;
  children: ReactNode;
}

const Layout = ({ user, onClickLogout, children }: Props) => {
  return (
    <Wrapper>
      <Header user={user} onClickLogout={onClickLogout} />
      <Main>{children}</Main>
      <Footer />
      <QuickScroll />
    </Wrapper>
  );
};

export default memo(Layout);
