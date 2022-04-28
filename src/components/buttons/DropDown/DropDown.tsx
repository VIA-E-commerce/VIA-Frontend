import React from 'react';

import { Wrapper } from './DropDown.styles';

interface Props {
  button: JSX.Element;
  children?: React.ReactNode;
}

const DropDown = ({ button: Button, children }: Props) => {
  return (
    <Wrapper>
      <div className="button">{Button}</div>
      <ul>{children}</ul>
    </Wrapper>
  );
};

export default React.memo(DropDown);
