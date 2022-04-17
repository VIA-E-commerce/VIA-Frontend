import React from 'react';

import { Wrapper } from './SoldOut.styles';

interface Props {
  width: number;
}

const SoldOut = ({ width }: Props) => {
  return (
    <Wrapper width={width}>
      SOLD
      <br />
      OUT
    </Wrapper>
  );
};

export default SoldOut;
