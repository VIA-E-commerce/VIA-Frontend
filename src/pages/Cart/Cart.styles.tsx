import styled from '@emotion/styled';

import { styles } from '@/styles';

export const CartItemSection = styled.section`
  grid-column: 1 / span 8;
`;

export const CartAside = styled.aside`
  grid-column: 9 / span 4;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level5}rem;

  position: sticky;
`;

export const EmptyCartItemList = styled.div`
  height: 100%;

  border-width: 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.font};
  border-top-width: ${styles.border.level2}rem;
  border-bottom-width: ${styles.border.level1}rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
