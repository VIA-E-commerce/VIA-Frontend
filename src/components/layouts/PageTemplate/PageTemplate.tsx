import React from 'react';

import { Wrapper } from './PageTemplate.styles';

interface Props {
  children?: React.ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return <Wrapper>{children}=</Wrapper>;
};

export default React.memo(PageTemplate);
