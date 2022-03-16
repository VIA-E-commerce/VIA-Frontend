import styled from '@emotion/styled';

import { mixins, styles } from '@/styles';

export interface SectionStyleProps {
  cols: number;
  rowGap: number;
}

export const Section = styled.section<SectionStyleProps>`
  ${({ cols, rowGap }) => mixins.grid(cols, rowGap * styles.pxToRem)}
`;
