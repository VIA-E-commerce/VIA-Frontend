import { styles } from '@/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: ${styles.space.level2}rem;

  color: ${({ theme }) => theme.color.darkGray};

  display: flex;
  justify-content: flex-end;
`;
