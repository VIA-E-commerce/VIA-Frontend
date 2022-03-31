import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.article`
  margin: 7.2rem 0;
  padding: 5.6rem;
  border: ${styles.border.level1}rem solid ${({ theme }) => theme.color.gray};
`;
