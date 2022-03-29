import React from 'react';

import { Wrapper } from './Tab.styles';

interface Props {
  children: React.ReactNode;
}

const Tab = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default React.memo(Tab);
