import React, { memo, ReactNode } from 'react';

import { styles } from '@/styles';

import { Section, SectionStyleProps } from './GridSection.styles';

interface Props extends SectionStyleProps {
  children: ReactNode;
}

const GridSection = ({ children, cols, rowGap }: Props) => {
  return (
    <Section cols={cols} rowGap={rowGap}>
      {children}
    </Section>
  );
};

GridSection.defaultProps = {
  cols: styles.grid.column,
  rowGap: styles.grid.rowGap * 10,
};

export default memo(GridSection);
