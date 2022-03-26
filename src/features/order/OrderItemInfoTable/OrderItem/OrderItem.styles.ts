import styled from '@emotion/styled';

import { styles } from '@/styles';

const columnGap = styles.component.cart.itemPadding;

export const Tr = styled.tr`
  height: 18rem;

  padding: ${columnGap}rem;

  td {
    min-width: 8rem;

    text-align: center;
    vertical-align: center;

    &.product-name {
      .option {
        color: ${({ theme }) => theme.color.darkGray};
        font-size: ${styles.fontSize.small}rem;
      }

      div + div {
        margin-top: 0.8rem;
      }
    }

    &.discount {
      color: ${({ theme }) => theme.color.darkGray};
    }
  }
`;

export const Thumbnail = styled.td`
  img {
    height: 12rem;
    aspect-ratio: 1;
    object-fit: cover;
  }

  transition: transform 0.15s ease-in-out;
`;
