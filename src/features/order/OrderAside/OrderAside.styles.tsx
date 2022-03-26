import styled from '@emotion/styled';

import { styles } from '@/styles';

export const StyledAside = styled.aside`
  grid-column: 9 / span 4;

  & > div {
    display: flex;
    flex-direction: column;
    gap: ${styles.space.level5}rem;

    position: sticky;
    top: ${styles.component.header.height + styles.space.level1}rem;
  }
`;

export const Wrapper = styled.div`
  padding: ${styles.component.cart.itemPadding}rem;

  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.cartBorder};

  .total-price {
    font-size: ${styles.fontSize.h4}rem;
  }

  & > div + div {
    margin-top: ${styles.space.level5}rem;
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.lightGray};
  }
`;
