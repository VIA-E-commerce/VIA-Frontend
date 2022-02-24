import React, { memo, ReactNode } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Wrapper, Main } from './Layout.styles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default memo(Layout);