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
