import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  padding: ${styles.component.cart.itemPadding}rem;

  border: ${styles.border.level1}rem solid
    ${({ theme }) => theme.color.cartBorder};

  & > div + div {
    margin-top: ${styles.space.level5}rem;
    border-top: ${styles.border.level1}rem solid
      ${({ theme }) => theme.color.lightGray};
  }
`;
