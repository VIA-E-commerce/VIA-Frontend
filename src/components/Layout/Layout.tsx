import React, { memo, ReactNode } from 'react';

import { UserSummary } from '@/types';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Wrapper, Main } from './Layout.styles';

interface Props {
  user?: UserSummary;
  children: ReactNode;
}

const Layout = ({ user, children }: Props) => {
  return (
    <Wrapper>
      <Header user={user} />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default memo(Layout);
