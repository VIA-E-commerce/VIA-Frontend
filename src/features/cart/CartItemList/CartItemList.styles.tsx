import styled from '@emotion/styled';

import { styles } from '@/styles';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level5}rem;
`;

export const EmptyList = styled.div`
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
