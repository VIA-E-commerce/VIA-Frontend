import React, { memo, ReactNode } from 'react';

import { QuickScroll } from '../../scroll';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Wrapper, Main } from './Layout.styles';

interface Props {
  onClickLogout: () => void;
  children: ReactNode;
}

const Layout = ({ onClickLogout, children }: Props) => {
  return (
    <Wrapper>
      <Header onClickLogout={onClickLogout} />
      <Main>{children}</Main>
      <Footer />
      <QuickScroll />
    </Wrapper>
  );
};

export default memo(Layout);
