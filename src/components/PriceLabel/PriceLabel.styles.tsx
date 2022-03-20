import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { styles } from '@/styles';

export type PriceLabelSizeType = 'normal' | 'large';
interface PriceLabelStyleProps {
  size: PriceLabelSizeType;
}

const getPriceLabelSizeStyles = (size: PriceLabelSizeType) => {
  let height = 3.2;
  let gap = styles.space.level2;
  let sellingPriceFontSize = styles.fontSize.large;
  let retailPriceFontSize = styles.fontSize.small;

  if (size === 'large') {
    height = 4.8;
    gap = styles.space.level4;
    sellingPriceFontSize = styles.fontSize.h4;
    retailPriceFontSize = styles.fontSize.h5;
  }

  return css`
    height: ${height}rem;
    gap: ${gap}rem;

    .selling-price {
      font-size: ${sellingPriceFontSize}rem;
    }
    .retail-price {
      font-size: ${retailPriceFontSize}rem;
    }
  `;
};
export const Wrapper = styled.div<PriceLabelStyleProps>`
  ${({ size }) => getPriceLabelSizeStyles(size)}

  display: flex;
  align-items: flex-end;

  .selling-price {
    display: flex;
    align-items: center;

    font-weight: ${styles.fontWeight.bold};
  }

  .retail-price {
    color: ${({ theme }) => theme.color.gray};
    text-decoration: line-through;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
