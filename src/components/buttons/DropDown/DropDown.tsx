import React from 'react';

import { Wrapper } from './DropDown.styles';

interface Props {
  button: JSX.Element;
  style: React.CSSProperties;
  children?: React.ReactNode;
}

const DropDown = ({ button: Button, style, children }: Props) => {
  return (
    <Wrapper>
      <div className="button">{Button}</div>
      <ul style={style}>{children}</ul>
    </Wrapper>
  );
};

export default React.memo(DropDown);
