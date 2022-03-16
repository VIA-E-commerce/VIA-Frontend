import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles } from '@/styles';

type LabelFieldSize = 'normal' | 'large';
export interface LabelFieldStyleProps {
  size: LabelFieldSize;
}
const getLabelFieldSize = (size: LabelFieldSize) => {
  let height = 4;
  if (size === 'large') {
    height = 4.8;
    return css`
      &,
      .label {
        min-height: ${height}rem;
        line-height: ${height}rem;
      }
      font-size: ${styles.fontSize.normal}rem;
    `;
  }

  return css`
    &,
    .label {
      min-height: ${height}rem;
      line-height: ${height}rem;
    }
    font-size: ${styles.fontSize.small}rem;
  `;
};
export const Wrapper = styled.div<LabelFieldStyleProps>`
  ${({ size }) => getLabelFieldSize(size)}

  display: flex;

  .label {
    width: 14.4rem;
  }

  .content {
    flex: 1;
    display: flex;
  }
`;
