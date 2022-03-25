import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles } from '@/styles';

type LabelFieldSize = 'normal' | 'large';
export type ContentAlignType = 'left' | 'center' | 'right';
export interface LabelFieldStyleProps {
  size: LabelFieldSize;
  contentAlign: ContentAlignType;
  required?: boolean;
}
const getLabelFieldSize = (size: LabelFieldSize) => {
  let height = 4;
  if (size === 'large') {
    height = 4.8;
    return css`
      .label {
        min-height: ${height}rem;
        line-height: ${height}rem;
      }
      font-size: ${styles.fontSize.normal}rem;
    `;
  }

  return css`
    .label {
      min-height: ${height}rem;
      line-height: ${height}rem;
    }
    font-size: ${styles.fontSize.small}rem;
  `;
};
const getContentAlignment = (contentAlign: ContentAlignType) => {
  let align = 'flex-start';

  if (contentAlign === 'center') {
    align = 'center';
  } else if (contentAlign === 'right') {
    align = 'flex-end';
  }

  return css`
    justify-content: ${align};
    align-items: center;
  `;
};
export const Wrapper = styled.div<LabelFieldStyleProps>`
  ${({ size }) => getLabelFieldSize(size)}

  display: flex;

  .label {
    width: 14.4rem;

    .required {
      color: red;
    }
  }

  .content {
    flex: 1;
    display: flex;
    ${({ contentAlign }) => getContentAlignment(contentAlign)}
  }
`;
