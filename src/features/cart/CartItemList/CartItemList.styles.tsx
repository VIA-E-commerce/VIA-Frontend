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
