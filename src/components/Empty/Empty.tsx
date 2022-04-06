import React from 'react';

import { Wrapper } from './Empty.styles';

interface Props {
  text: string;
}

const Empty = ({ text }: Props) => {
  return <Wrapper>{text}</Wrapper>;
};

export default React.memo(Empty);
