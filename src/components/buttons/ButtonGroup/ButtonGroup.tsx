import React, { memo } from 'react';

import { styles } from '@/styles';

import { Wrapper } from './ButtonGroup.styles';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonWidth?: number;
  cols?: number;
  gap?: number;
  rowGap?: number;
  colGap?: number;
}

const ButtonGroup = ({
  buttonWidth,
  cols,
  gap,
  rowGap = styles.grid.rowGap,
  colGap = styles.grid.gutter,
  children,
  ...rest
}: ButtonGroupProps) => {
  const calcedRowGap = gap || rowGap;
  const calcedColGap = gap || colGap;

  return (
    <Wrapper
      buttonWidth={buttonWidth}
      cols={cols}
      rowGap={calcedRowGap}
      colGap={calcedColGap}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default memo(ButtonGroup);
