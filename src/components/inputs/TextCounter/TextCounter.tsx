import React from 'react';

import { Wrapper } from './TextCounter.styles';

interface Props {
  value: string;
  maxLength: number;
}

const TextCounter = ({ value, maxLength }: Props) => {
  return (
    <Wrapper>
      {value.length} / {maxLength}
    </Wrapper>
  );
};

export default TextCounter;
