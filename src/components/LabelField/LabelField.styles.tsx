import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles } from '@/styles';

type LabelFieldSize = 'normal' | 'large';
export type AlignType = 'left' | 'center' | 'right';
export interface LabelFieldStyleProps {
  size: LabelFieldSize;
  labelAlign: AlignType;
  contentAlign: AlignType;
  required?: boolean;
  bold?: boolean;
  vertical?: boolean;
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
const getAlignment = (alignType: AlignType) => {
  let align = 'flex-start';

  if (alignType === 'center') {
    align = 'center';
  } else if (alignType === 'right') {
    align = 'flex-end';
  }

  return css`
    justify-content: ${align};
    align-items: center;
  `;
};
const getVerticalStyles = (vertical?: boolean) => {
  if (vertical) {
    return css`
      flex-direction: column;
    `;
  }

  return css`
    .label {
      width: 14.4rem;
    }
  `;
};
export const Wrapper = styled.div<LabelFieldStyleProps>`
  ${({ size }) => getLabelFieldSize(size)}

  display: flex;
  ${({ vertical }) => getVerticalStyles(vertical)}

  .label {
    .required {
      color: red;
    }
    ${({ bold }) => bold && `font-weight: ${styles.fontWeight.bold};`}

    display: flex;
    ${({ labelAlign }) => getAlignment(labelAlign)}
  }

  .content {
    flex: 1;
    display: flex;
    ${({ contentAlign }) => getAlignment(contentAlign)}
  }
`;
