import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';
import { css } from '@emotion/react';

export const Wrapper = styled.article`
  display: flex;
  gap: ${styles.grid.gutter}rem;

  & > section {
    flex: 1;
  }
`;

export const TopButtonGroup = styled.div`
  height: 4rem;

  display: flex;
  justify-content: flex-end;
  gap: ${styles.space.level5}rem;

  svg {
    font-size: ${styles.fontSize.h4}rem;
  }
`;

export const ProductImages = styled.section`
  grid-column: 1 / span 6;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

export const ProductDetailInfo = styled.section`
  grid-column: 7 / span 6;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const infoBodyGap = styles.space.level4;
const getInfoBodyBorderStyle = (theme: Theme) => {
  const borderStyle = `${styles.border.level2}rem solid ${theme.color.font}`;
  return css`
    border-top: ${borderStyle};
    border-bottom: ${borderStyle};
  `;
};

export const InfoBody = styled.div`
  padding: 2.4rem 0;

  display: flex;
  flex-direction: column;
  gap: ${infoBodyGap}rem;

  ${({ theme }) => getInfoBodyBorderStyle(theme)}

  section + section, section + footer {
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.gray};
    padding-top: ${infoBodyGap}rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: ${infoBodyGap}rem;
  }
`;

export const ProductName = styled.h4`
  margin: 0;

  height: 4rem;

  font-weight: ${styles.fontWeight.regular};
`;

export const ProductPrice = styled.div`
  height: 4.8rem;

  display: flex;
  align-items: flex-end;
  gap: ${styles.space.level4}rem;

  .selling-price {
    font-size: ${styles.fontSize.h4}rem;
    font-weight: ${styles.fontWeight.bold};
  }

  .retail-price {
    color: ${({ theme }) => theme.color.gray};
    font-size: ${styles.fontSize.h5}rem;
    text-decoration: line-through;
  }
`;

export const InfoFooter = styled.footer``;
