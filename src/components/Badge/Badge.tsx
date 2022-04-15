import React from 'react';

import { Wrapper } from './Badge.styles';

interface Props {
  label: string | number;
  style?: React.CSSProperties;
}

const Badge = ({ label, ...rest }: Props) => {
  return <Wrapper {...rest}>{label}</Wrapper>;
};

export default React.memo(Badge);
