import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  height: inherit;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const EmptyImage = styled.div`
  border: 0.4rem dotted ${({ theme }) => theme.color.lightGray};

  min-height: 16rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${styles.fontSize.normal}rem;
`;
