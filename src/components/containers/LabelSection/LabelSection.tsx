import { GridSection } from '@/components/layouts';
import React from 'react';

import { Wrapper, Label, Contents } from './LabelSection.styles';

interface Props {
  label: string;
  cols?: number;
  rowGap?: number;
  children?: React.ReactNode;
}

const LabelSection = ({ label, cols, rowGap, children }: Props) => {
  return (
    <Wrapper>
      <GridSection cols={cols} rowGap={rowGap}>
        <Label>{label}</Label>
        <Contents>{children}</Contents>
      </GridSection>
    </Wrapper>
  );
};

LabelSection.defaultProps = {
  cols: 1,
  rowGap: 0,
};

export default React.memo(LabelSection);
