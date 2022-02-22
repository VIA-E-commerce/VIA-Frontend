import React, { memo, ReactNode } from 'react';

import { styles } from '@/styles';

import { Section } from './GridSection.styles';

export interface SectionStyleProps {
  cols: number;
}

interface Props extends SectionStyleProps {
  children: ReactNode;
}

const GridSection = ({ children, cols }: Props) => {
  return <Section cols={cols}>{children}</Section>;
};

GridSection.defaultProps = {
  cols: styles.grid.column,
};

export default memo(GridSection);
