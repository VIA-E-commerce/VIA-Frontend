import styled from '@emotion/styled';

import { styles } from '@/styles';

export const OrderHeader = styled.section`
  grid-column: 1 / span 12;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    height: 6.4rem;
    line-height: 6.4rem;

    font-size: ${styles.fontSize.h5}rem;
    font-weight: ${styles.fontWeight.bold};

    border-bottom: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.font};
  }
`;

export const OrderBody = styled.section`
  grid-column: 1 / span 8;
  margin-bottom: 8rem;

  display: flex;
  flex-direction: column;
`;
