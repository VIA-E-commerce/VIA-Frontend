import React from 'react';

import { Wrapper } from './PageTemplate.styles';

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const PageTemplate = ({ style, children }: Props) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

export default React.memo(PageTemplate);
